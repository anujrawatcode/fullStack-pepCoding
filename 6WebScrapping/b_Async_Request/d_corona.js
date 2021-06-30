    const request = require('request');
    const cherrio = require('cheerio');
const chalk = require('chalk');

console.log("Before");
request('https://www.worldometers.info/coronavirus/', cb);
console.log("After");
function cb(error, response, html) {

    if (error) {
        console.error('error:', error); // Print the error if one occurred
    } else {
        handleHtml(html);
        // console.log('body:', html); // Print the HTML for the Google homepage.
    }
}

function handleHtml(html) {
    let selTool = cherrio.load(html);
    let h1s = selTool("h1");

    for (let i = 0; i < h1s.length; i++) {
        let data = selTool(h1s[i]).text();
        console.log(chalk.red(data));
    }
}