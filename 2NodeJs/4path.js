// path module
const path = require("path");

let dir = "dirName";
console.log(dir + "/readme.txt");

// join "\ / " according to OS type
dir = path.join(dir, "readme.txt");
console.log(dir);


//extname() : return extension of the file
let ext = path.extname(path.join(__dirname, "3klm.txt"));
console.log("ext:", ext);

//basename() : if bog name then return last name of file or folder
let name = path.basename(__dirname);
console.log(name);

name = path.basename(path.join(__dirname, "4path.js"));
console.log(name);