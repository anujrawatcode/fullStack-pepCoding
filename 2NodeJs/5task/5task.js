let chalk = require("chalk");
let figlet = require("figlet");

console.log(chalk.blue("Hello"));
console.log(chalk.bold("World"));

console.log(chalk.red( figlet.textSync("# pepcoders") ));