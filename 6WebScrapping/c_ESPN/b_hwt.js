const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
console.log("Before");
request(url, cb);
console.log('After');
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractHTML(html);
    }
}

function extractHTML(html) {

    let $ = cheerio.load(html);
    let wTeamName = winningTeamName(html, $);


    let fPlayer = "";
    let fWkt = 0;
    // console.log("#####################################*******************************************");

    let innArr = $('.match-body .match-scorecard-page .Collapsible');
    for (let i = 0; i < innArr.length; i++) {
        let teamName = $(innArr[i]).find('.header-title.label')
        let team = teamName.text();
        team = team.split('INNINGS')[0].trim();
        let tableEle = $(innArr[i]).find('.table.batsman');
        let bowl = $(tableEle).find('tr');
        console.log(" ******************** Team No " + (i + 1) + " ****************");

        for (let k = 0; k < bowl.length; k++) {

            let allColsOfPlayer = $(bowl[k]).find("td");
            let playerName = $(allColsOfPlayer[0]).text();
            // let wkt = $(allColsOfPlayer[4]).text();

            if ($(allColsOfPlayer[0]).hasClass('batsman-cell')) {

                let link = $(allColsOfPlayer[0]).find('a').attr('href');
                link = 'https://www.espncricinfo.com' + link;
                getBirthdaypage(link, playerName)
                // console.log(playerName + " " + );
            }

            // console.log(fPlayer, " ", fWkt);
        }
    }
}

function getBirthdaypage(url, name) {
    request(url, cb);
    function cb(err, response, html) {
        if (err) {

        } else {
            extractBirthDay(html, name);
        }
    }
}

function extractBirthDay(html, name, teamName) {
    let $ = cheerio.load(html);
    let detailsArr = $(".player-card-description");
    let birthDay = $(detailsArr[1]).text();
    console.log(`${name} was born on ${birthDay}`);
}

function winningTeamName(html, $) {


    let teamsArr = $(".match-info.match-info-MATCH .team");
    let wTeamName;
    for (let i = 0; i < teamsArr.length; i++) {
        let hasclass = $(teamsArr[i]).hasClass('team-gray');
        if (hasclass == false) {
            let temp = $(teamsArr[i]).find('.name');
            wTeamName = temp.text();
        }
    }
    return (wTeamName);
}