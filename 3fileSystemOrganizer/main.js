#!/usr/bin/env node

// shebang syntex
// // // 0 have node, 1 have file name we type in cmd
let input = process.argv.slice(2);
let fs = require("fs");
let path = require("path");


let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let orgObj = require("./commands/organize");


// console.log(inputArr);


// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help

let command = input[0];

switch (command) {
    case "tree":
        treeObj.treeKey(input[1]);
        break;
    case "organize":
        orgObj.organizeKey(input[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please Input Right command");
        break;
}




