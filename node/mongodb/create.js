'use strict';
const mongo = require('./mongo');

mongo.connect(connected);
function connected(err, db) {
    if (err) {
        throw err;
    }
    db.collection('example').insertOne({value: 1});
    mongo.close(disconnected);
}

function disconnected(err) {
    if (err) {
        throw err;
    }
    console.log("Exiting");
}