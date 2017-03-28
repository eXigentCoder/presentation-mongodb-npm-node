const moment = require("moment");
const startTime = moment();
console.log('Hello from %s!', startTime.fromNow()); //notice console.log by default uses util.format we played around with earlier.