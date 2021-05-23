let cp = require("child_process");

console.log("Trying to open calulator")
// cp.execSync("start calc");
console.log("opened calculator");

//cp.execSync("start chrome http:\\instagram.com");

let op = cp.execSync("node 1xyz.js");
console.log("output: " + op);
//     + above will automatically convet to UTF8