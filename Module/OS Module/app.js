const os=require('os');

//Info about current user
const user=os.userInfo();
console.log(user);

//Method return the system uptime in seconds
console.log("The System uptime is "+os.uptime()+"seconds");

const currentOS={
    name:os.type(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentOS);