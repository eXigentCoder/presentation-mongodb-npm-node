'use strict';
const util = require("util");
/* Wtf, where are import statements? require is so 2016 :/
 * To find out why they aren't here just yet, check out this article https://nodesource.com/blog/es-modules-and-node-js-hard-choices/
 * If you want them right now, use node 7 or see http://stackoverflow.com/a/36901294/1248080
 */

console.log(util.format('%s %s!', 'Hello', 'World'));