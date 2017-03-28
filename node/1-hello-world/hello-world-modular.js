const helloWorld = require('./hello-world');

if (typeof helloWorld === 'function') {
    return helloWorld();
}
if (helloWorld.helloWorld && typeof helloWorld.helloWorld === 'function') {
    return helloWorld.helloWorld();
}
throw new Error("Never said hi :/");