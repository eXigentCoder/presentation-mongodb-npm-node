'use strict';
const mongo = require('./mongo');
const collectionNames = require('./collection-names');
mongo.connect(connected);

function connected(err, db) {
    if (err) {
        throw err;
    }
    db.collection(collectionNames.example).findOne({naturalKey: "bob"}, retrieved);
}

function retrieved(err, result) {
    if (err) {
        mongo.close(disconnected);
        throw err;
    }
    console.log(result);
    mongo.close(disconnected);
}

function disconnected(err) {
    if (err) {
        throw err;
    }
    console.log("Exiting");
}