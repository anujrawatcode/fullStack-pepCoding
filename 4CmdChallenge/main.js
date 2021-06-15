let input = process.argv.slice(2);
let fs = require("fs");
let path = require("path");

let cmd = input[0];

switch (cmd) {
    case "wcat":
        wcatWork(input);
        break;
    default:
        console.log("Please Input Correct Command");
        break;
}

function wcatWork(input) {
    input = input.slice(1);
    // console.log(input);
    let s = 0, n = 0, b = 0;

    if (input.length == 0) {
        console.log("Write something along with command");
        return;
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i] == '-s')
            s++;
        if (input[i] == '-n')
            n++;
        if (input[i] == '-b')
            b++;
    }
    if (s == 0 && n == 0 && b == 0) {
        display(input);
        return;
    }
    else if (s == 1 && n == 0 && b == 0) {
        // console.log("-s work");
        Command_S_Check(input)
        return;
    }
    else if (s == 0 && n == 1 && b == 0) {
        console.log("-n work");
        return;
    }
    else if (s == 1 && n == 0 && b == 1) {
        console.log("-b work");
    } else {
        console.log("Don't mix up -s -n -b");
    }

}

function Command_S_Check(input) {
    // console.log(input);
    if (input[0] != '-s' && input[input.length - 1] != "-s") {
        console.log("Enter -s in end or start");
        return;
    } else {
        // console.log("-s work");
        if (input[0] == "-s") {
            input.shift();
        } else {
            input.pop();
        }
        S_file_check(input);
    }
}

function S_file_check(input) {
    var clone = [];

    // console.log(process.cwd());
    for (let i = 0; i < input.length; i++) {
        cwd = process.cwd();
        cwd = path.join(cwd, input[i]);
        clone.push(input[i]);
        input[i] = cwd;
    }
    // console.log(clone);
    for (let i = 0; i < input.length; i++) {
        let isFile = fs.existsSync(input[i]);
        if (!isFile) {
            console.log(clone[i], "file not exits");
            return;
        }
    }
    // console.log(input);
    S_work(input);
}

function S_work(input) {
    for (let i = 0; i < input.length; i++) {
        let buffer = "";
        buffer += fs.readFileSync(input[i]);
        buffer = buffer.replace(/(\r\n|\n|\r)/gm, "");
        console.log(buffer);
    }
}


function display(input) {
    // console.log(input);
    var clone = [];

    // console.log(process.cwd());
    for (let i = 0; i < input.length; i++) {
        cwd = process.cwd();
        cwd = path.join(cwd, input[i]);
        clone.push(input[i]);
        input[i] = cwd;
    }
    // console.log(clone);

    for (let i = 0; i < input.length; i++) {
        let isFile = fs.existsSync(input[i]);
        if (!isFile) {
            console.log(clone[i], "file not exits");
            return;
        }
    }

    finallyDisplay(input);
}

function finallyDisplay(input) {
    // console.log(input);

    for (let i = 0; i < input.length; i++) {
        let buffer = fs.readFileSync(input[i]);
        console.log("" + buffer);
    }
    // console.log("Printed");
}