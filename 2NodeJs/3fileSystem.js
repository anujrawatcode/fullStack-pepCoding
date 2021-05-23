// file/folder CRUD
let fs = require("fs");
const { mkdir, mkdirSync } = require("node:fs");

//********************************* files**********************
//       read  :   readFileSync();
//       create :  openSync();
//       update  : writeFileSync();
//       append  : appendFileSync();
//       delete  : fs.unlinkSync();

//-------READ from a file
let buffer = fs.readFileSync("1xyz.js"); //what to read, give binary buffer
console.log("data" + buffer);

//-------CREATE a file
fs.openSync("3klm.txt", "w");

//-------CREATE & Write
// no file so create it else overwrite conent
fs.writeFileSync("3klm.txt", "This is writing in file");

fs.appendFileSync("3klm.txt", ". add at last");//add at last

//******************************Folder*************************
//   create : mkdirSync()
//   read   : readdirSync()
//   delete : rmdirSync()

//------ Creation of folder
fs.mkdirSync("3file");
 
fs.writeFileSync("3file/file.txt", "content");

// give the name of file in folder mentioned
let content = fs.readdirSync("3file");
console.log(content);

// remove files
for (let i = 0; i < content.length; i++) {
    fs.unlinkSync("3file/" + content[i]);
}
// remove folder
 fs.rmdirSync("3file");  // remove folder


//**************   Checking    ************************ */
var doesPathExists = fs.existsSync("3klm.txt"); // if a file exists return true
console.log(doesPathExists);

let detailsObj = fs.lstatSync(__dirname+"\\3fileSystem.js");
let ans = detailsObj.isFile(); // if file return true
console.log(ans);
let ans2 =detailsObj.isDirectory(); // if folder return true
console.log(ans2);
