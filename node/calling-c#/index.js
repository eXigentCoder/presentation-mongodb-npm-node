'use strict';
const edge = require("edge");
const path = require('path');
const filePath = path.join(__dirname, 'mysample.cs');
const hello = edge.func(filePath);

hello('Node.js', function (err, result) {
    if (err) {
        throw err;
    }
    console.log(result);
});