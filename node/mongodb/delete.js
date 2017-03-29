'use strict';
const mongo = require('./mongo');
const collectionNames = require('./collection-names');
mongo.connect(connected);

function connected(err, db) {
    if (err) {
        throw err;
    }
    const filter = {naturalKey: "bob"};
    db.collection(collectionNames.example).findOneAndDelete(filter, deleted);
}

function deleted(err, result) {
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