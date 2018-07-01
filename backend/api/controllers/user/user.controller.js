"use strict;"
var http = require("http");
var Mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt-nodejs");
var config = require("../../../config.json");
var secretKey = config.secretKey;
var _ = require("lodash");

var app = null;
var socketIo = null;
var logger = null;
const collection = "User";

/* -------------Require files------------------ */
var schema = require("../../helpers/user.model");
var loginHooks = require("./login.hooks");

/*------------ Schema defs and set up-------------*/
schema.pre("save", loginHooks.hashPassword);

schema.methods.comparePassword = function (userPassword) {
    var self = this;
    return bcrypt.compareSync(userPassword, self.password);
};

/* ----------------Model creation------------------ */
var userModel = Mongoose.model(collection, schema);


function init(_app, _socketIo, _logger) {
    app = _app;
    socketIo = _socketIo;
    logger = _logger;
}

/*
    expiry = mintues - 1440 minutes  = 24hrs;
 */
function createJWTToken(user) {
    var token = jwt.sign({
        "_id": user._id,
        "username": user.username,
        "password": user.password
    }, secretKey, { "expiresIn": 1440 });
    return token;
}

function login(req, res) {
    logger.trace("Loggin in a user...");
    var io = app.get("socketIo");

    var params = req.swagger.params['data'].value;
    var username = params.username;
    var password = params.password;

    Mongoose.models["User"].findOne({ "username": username }).exec()
        .then(user => {
            if (user) {
                var isValidPassword = user.comparePassword(password);

                if (!isValidPassword) {
                    res.status(400).send({ "message": "Invalid Password" });
                    return;
                }
                var token = createJWTToken(user);
                res.status(200).send({
                    "success": true,
                    "token": token,
                    "user": user,
                    "message": "User successfully logged in."
                });

            } else {
                res.status(400).send({ "message": "Invalid Username" });
            }
        })
        .catch(e => res.status(400).send({ "message": e.message }));
}

function create(req, res) {
    logger.trace("Creating a user...");
    var params = req.swagger.params['data'].value;
    /*  
        Alternative:
        var newUser = new userModel(params);
        newUser.save().then().catch(); 
    */
    userModel.create(params, (err, user) => {
        if (err) {
            res.status(400).send({ "message": err.message });
        }
        else if (user) {
            var token = createJWTToken(user);
            res.status(200).send({
                "success": true,
                "token": token,
                "user": user,
                "message": "User created successfully."
            });
        } else {
            res.status(400).send({ "message": "Error Occured while creating a user" });
        }
    })
}

function loggedInUser(req, res) {
    var user = req.user;
    Mongoose.models["User"].findOne({ "_id": user._id, "username": user.username }).exec()
        .then(user => {
            if (user) {
                res.status(200).send({
                    "success" :true,
                    user: user,
                    "message" : "Acquired the current logged In user."
                });
            } else {
                res.status(404).send({ "message": "User not found" });
            }
        })
        .catch(e => res.status(400).send({ "message": e.message }));
}

module.exports = {
    init: init,
    login: login,
    create: create,
    loggedInUser: loggedInUser
}