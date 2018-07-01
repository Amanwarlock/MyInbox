"use strict;"
var Mongoose = require("mongoose");

var defintion = {
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    avatar: {
        _id: { type: String, required: true },
        name: { type: String, required: true },
        url: { type: String, required: true },
        path: { type: String, required: true }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    lastUpdatedAt: {
        type: Date
    },
    deleted: {
        type: Boolean,
        default: false
    }
}

var schema = new Mongoose.Schema(defintion);

module.exports = schema;