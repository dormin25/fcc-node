const os = require("os")
// info about the current user 

const user = os.userInfo()
console.log("5- ",user)

//system uptime 
const uptime = os.uptime()
console.log(`09 - he system uptime is ${uptime}`);

//system details 

const curentos= {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem: os.freemem(),
}
console.log(curentos)