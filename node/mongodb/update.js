'use strict';
const mongo = require('./mongo');
const collectionNames = require('./collection-names');
mongo.connect(connected);

function connected(err, db) {
    if (err) {
        throw err;
    }
    const filter = {naturalKey: "bob"};
    const replacement = {
        naturalKey: "bob",
        updated: true
    };
    db.collection(collectionNames.example).findOneAndReplace(filter, replacement, replaced);
}

function replaced(err, result) {
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