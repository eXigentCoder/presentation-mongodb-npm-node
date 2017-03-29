'use strict';
const mongo = require('mongodb');
const connectionString = "mongodb://localhost:27017/beer-and-tech";
const opts = {
    socketOptions: {
        keepAlive: 1,
        autoReconnect: true
    },
    sslValidate: false
};
const mongoConnectionOptions = {
    server: opts,
    replSet: opts
};
let state = {
    connect: connectToDb,
    db: null,
    close: closeConnection,
    isValidObjectId: isValidObjectId
};
module.exports = state;

function isValidObjectId(id) {
    if (!id) {
        return false;
    }
    if (id.toString().length !== 24) {
        return false;
    }
    return ObjectId.isValid(id.toString());
}

function closeConnection(callback) {
    if (!state.db) {
        return callback(new Error("db was null when calling close, may already be closed"));
    }
    state.db.close(callback);
}

function connectToDb(callback) {
    if (state.db) {
        return process.nextTick(function () {
            callback(null, state.db);
        });
    }
    mongo.MongoClient.connect(connectionString, mongoConnectionOptions, connected);
    function connected(err, db) {
        if (err) {
            return callback(err);
        }
        state.db = db;
        console.log("Mongodb connected");
        callback(null, db);
    }
}
