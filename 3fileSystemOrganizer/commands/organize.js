let fs = require("fs");
let path = require("path");

let utilityObj = require("../utility");
let types = utilityObj.types

let destPath;
function organizeFn(dirPath) {

    if (dirPath == undefined) {
        // console.log("Enter the directory name");
        destPath = process.cwd();
        organizeHelp(dirPath, destPath);
        return;
    } else {
        let doesExits = fs.existsSync(dirPath);
        if (doesExits) {

            let destPath = path.join(dirPath, "organized_file");
            if (!fs.existsSync(destPath))
                fs.mkdirSync(destPath);
            // create folder orgained
            console.log(destPath);
            organizeHelp(dirPath, destPath);

        } else {
            console.log("Enter the correct path");
            return;
        }
    }
    // folder file names
    // create folder organize
    // folders in organize
    // move files to respective 
}

function organizeHelp(dirPath, destPath) {
    // scan files in dirPath
    // copy file from dirPath -> destPath
    // delete files from dirPath

    let childNames = fs.readdirSync(dirPath);
    // console.log(childNames);

    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(dirPath, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {

            let category = getCategory(childNames[i]);
            //  console.log(childNames[i], "belong to -->, ", category);

            sendFiles(childAddress, destPath, category);

        }

    }

    // treverse every file and move to respective subDir
}
function sendFiles(srcFilePath, dest, category) {
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, " copied to ", category)
}
function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);
    // console.log(ext);

    for (let type in types) {
        let cTypeArray = types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                return type;
            }
        }

    }
    return "others";
}

module.exports = {
    organizeKey: organizeFn
}


