const os=require('os');

//Platform
console.log(os.platform());//darwin -> means on mac

// CPU arch
console.log(os.arch());

//CPU Core Info
console.log(os.cpus()); //every core of the cpu

//Free memory
console.log(os.freemem());//build app do with system

//Total memory
console.log(os.totalmem());

//Home dir
console.log(os.homedir());

//Uptime -> aoumd of time system is us //number of seconds
console.log(os.uptime());