const os = require('os')

// find the user info
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`)

const CurrentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()

}
console.log(CurrentOs)
