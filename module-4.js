const names = require("./name");
console.log(names);
const sayHi = require("./func");
const arr = require("./arrnobj");

sayHi("ben");
sayHi(names.nike);
sayHi(names.mike);
sayHi(names.lisa);
console.log(arr.items[1]);
console.log(arr.singlePerson.name);
require("./add");

const os = require("os");

//info about the current user
const user = os.userInfo();
console.log(user);

//system up time
console.log(`System up time is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMen: os.freemem(),
};

console.log(currentOs);
