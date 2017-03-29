'use strict';
const express = require('express');
const app = express();
const host = 'localhost';
const port = 8080;
app.get("/", [
    logIncomingRequest,
    sendHelloWorld
]);

function logIncomingRequest(req, res, next) {
    console.info("[%s] Incoming request :", new Date().toISOString(), req.originalUrl);
    next();
}
function sendHelloWorld(req, res) {
    res.send("Hello World!");
}

app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log("Server listening at http://%s:%s", host, port)
});