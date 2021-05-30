let fs = require("fs");
let path = require("path");

function treeFn(dirPath) {
    if (dirPath == undefined) {
        // console.log("Enter the directory name");
        process.cwd()
        treeHelper(process.cwd(), "");
        return;
    } else {
        let doesExits = fs.existsSync(dirPath);
        if (doesExits) {

            treeHelper(dirPath, "");

        } else {
            console.log("Enter the correct path");
            return;
        }
    }
}

function treeHelper(dirPath, indent) {
    // if file print else go indeep
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile) {
        let fileName = path.basename(dirPath)
        console.log(indent + "├──" + fileName)
    } else {
        let dirName = path.basename(dirPath)
        console.log(indent + "└──" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i])
            treeHelper(childPath, indent + "\t");
        }
    }
}

module.exports = {
    treeKey: treeFn
}