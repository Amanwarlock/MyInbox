"use strict;"
var Mongoose = require("mongoose");
var http = require("http");
var log4js = require("log4js");
var logger = log4js.getLogger("MyInbox");
var config = require("../../config.json");

const url = config.mongoDBUrl;
var socketIo = null;
var app = null;

/* Require modules/files */
var userController = require("./user/user.controller");

Mongoose.connect(url, function (err, connection) {
    if (err) {
        logger.fatal("DB connection failed : ", err);
    } else {
        logger.trace("MONGODB :  Connected to DB....");
    }
});

function init(_app, _socketIo) {
    app = _app;
    socketIo = _socketIo;

    /* Instantiate Dependencies */
    userController.init(app, socketIo, logger);

    socketIo.on('connection', function (socket) {
        logger.trace("SOCKET : A user is connected to the socket......");
    });
}

module.exports = {
    init: init,
    /* User controller API Routing */
    v1_login: userController.login,
    v1_createUser: userController.create,
    v1_loggedInUser: userController.loggedInUser
};