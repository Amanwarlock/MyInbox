"use strict;"
var Mongoose = require("mongoose");
var http = require("http");
var log4js = require("log4js");
var logger = log4js.getLogger("MyInbox");
var config = require("../../config.json");

const url = config.mongoDBUrl;
var socketIo = null;
var app = null;

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

    socketIo.on('connection', function (socket) {
        logger.trace("SOCKET : A user is connected to the socket......");
    });
}

module.exports = {
    init: init
};