// last bowl commentry print it

const request = require('request');
const cherrio = require('cheerio');
const url = 'https://www.espncricinfo.com/series/south-africa-tour-of-west-indies-2021-1263140/west-indies-vs-south-africa-2nd-test-1263150/full-scorecard';

console.log("Before");
request(url, cb);
console.log("After");

function cb(error, response, html) {
    if (error)
        console.log("Error from site");
    else
        handleHTML(html);
}

function handleHTML(html) {
    $ = cherrio.load(html); //return tool, css selector to get element
    let elemsArr = $(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");
    let text = $(elemsArr[0]).text();
    console.log(elemsArr);

}
