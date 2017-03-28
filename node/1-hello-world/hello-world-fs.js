const path = require('path');
const fs = require("fs");

const pathToResourceFile = path.join(__dirname, '/echo.txt');
const fileReadOptions = {
    encoding: 'utf8'
};
//NB! BAD! This is that blocking IO that your parents warned you about:
const data = fs.readFileSync(pathToResourceFile, fileReadOptions);
console.log(data);

// Much better way:
fs.readFile(pathToResourceFile, fileReadOptions, readFileComplete);

//wtf dude, why not just use a fat arrow function? - If an error is thrown in this function, the stack trace will include the function name rather than just anonymous function.
function readFileComplete(err, fileData) {
    if (err) {
        throw err;
    }
    console.log(fileData);
    //todo show stack trace and how to use the Error constructor
    //throw new Error("Yay it worked, lets see if we get a stack trace!")
}