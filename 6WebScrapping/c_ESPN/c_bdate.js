//Birthday of every bats-man
const request = require('request');
const cheerio = require('cheerio');
const url = "https://www.espncricinfo.com/series/sri-lanka-in-england-2021-1239532/england-vs-sri-lanka-2nd-t20i-1249207/full-scorecard";

console.log('Before');
request(url, cb);
console.log('After');

function cb(error, response, html) {
    if (error)
        console.log("Error from site");
    else
        handleHTML(html);
}

function handleHTML(html) {
    let $ = cheerio.load(html);

    let teamArr = $('.match-scorecard-page .Collapsible');
    for (let i = 0; i < teamArr.length; i++) {
        let team = $(teamArr[i]).find('.header-title.label').text().split('INNINGS')[0];
        team = team.trim();
        console.log('Team is ' + team + ' Batsman name are :');

        let tableBats = $(teamArr[i]).find('.table.batsman');
        let tablerow = $(tableBats).find('tr');

        for (let i = 0; i < tablerow; i++) {
            let allcolBat = $(tableBats[i]).find('td');
            let names = allcolBat[0].text();
            console.log(names);
        }



    }
}