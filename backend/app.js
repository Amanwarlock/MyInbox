'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var log4js = require("log4js");
log4js.configure("logger.json", {});
var logger = log4js.getLogger("MyInbox");
var morgan = require("morgan");
var http = require('http').Server(app);
var jwt = require("jsonwebtoken");
var socketIo = require('socket.io')(http);
var cors = require("cors");
var bp = require("body-parser");
var config = require("./config.json");
const secretKey = config && config.secretKey ? config.secretKey : null;
var controller = require("./api/controllers/controller");

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }))
app.use(cors());
app.use(morgan('dev'));

process.env.PORT = config.port;

controller.init(app, socketIo);

app.set("socketIo", socketIo);
app.set("logger", logger);
app.set("secretkey", secretKey);

/* 
  HTTP 4XX codes:
    - 400 = Bad Request;
    - 401 = UnAuthorized;
    - 403 = Forbidden;
    - 404 = Not Found;
*/
app.use(function (req, res, next) {
  if (req.url === "/MyInbox/api/user/login" || req.url === "/MyInbox/api/user/create") {
    next();
  }
  else if (req.headers["Authorization"] || req.headers["x-access-token"]) {
    const token = req.headers["Authorization"] || req.headers["x-access-token"];
    jwt.verify(token, secretKey, function (err, decoded) {
      if (err) {
        res.status(401).send({ "message": "UnAuthorized , Authentication failed" });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(403).send({ "message": "No Token , Access Forbidden" });
  }
});

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  // app.listen(port);
  http.listen(port);
  logger.trace(`Server started on  :  http://localhost:${port}`);
});
