"use strict;"
var bcrypt = require("bcrypt-nodejs");

function hashPassword(next) {
    var self = this;
    bcrypt.hash(self.password, null, null, function (err, hash) {
        if (err) {
            next(err);
        } else {
            self.password = hash;
            next();
        }
    });
}

module.exports = {
    hashPassword: hashPassword
}   