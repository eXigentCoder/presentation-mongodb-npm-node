const helloWorldObject = {
    helloWorld: helloWorldFunction
};

function helloWorldFunction() {
    console.log('Hello World!');
}

/* Export as a property works fine but need to call twice, maybe if we set it directly? */
exports.helloWorld = helloWorldFunction;
/* The following doesn't work, why? See http://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js*/
//exports = helloWorldFunction;
/* The following also doesn't work for a similar reason*/
//exports = helloWorldObject;
/* Introducing module.exports! This works too but still have to call twice.*/
//module.exports = helloWorldObject;
/* module.exports allows us to simply export the function directly, preventing the need to call twice */
//module.exports = helloWorldFunction;

