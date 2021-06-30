//     Sync one-flow
const fs = require("fs");
// console.log("Before1");
// let data = fs.readFileSync("f1.txt");
// console.log("" + data);
// console.log("Further Processes1");


//     Async multi-flow

console.log("Before2");
let temp = fs.readFile("f1.txt", cb);
function cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("" + data);
    }
}
console.log("Further Processes2");