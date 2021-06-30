const request = require('request');
const url = 'https://github.com/topics';
const cheerio = require('cheerio');
const fs = require('fs');
const path = require("path");
const { log } = require('console');


console.log('Before');
request(url, cb)
console.log('After');

function cb(error, response, html) {
    if (error)
        console.log("Error in url callback");
    else
        handleHTML(html);
}

function handleHTML(html) {
    let $ = cheerio.load(html);
    let arrList = $('.topic-box.position-relative.hover-grow.height-full.text-center.border>a');

    for (let i = 0; i < arrList.length; i++) {
        let link = ($(arrList[i]).attr('href'));
        let topic = link.split('/');
        topic = topic[2];
        link = url + '/' + topic;
        let dir = path.join(__dirname, topic);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        bodyTopic(link, dir);
    }
}

function bodyTopic(link, dir) {
    request(link, cb);
    function cb(error, response, html) {
        if (error)
            console.log('error');
        else
            handleTopic(html, dir);
    }
}

function handleTopic(html, dir) {

    let $ = cheerio.load(html);
    let repoArr = $('.tabnav');
    repoArr = repoArr.slice(0, 8);

    for (let i = 0; i < repoArr.length; i++) {
        let ancArr = $(repoArr[i]).find('a');
        let ans = $(ancArr[1]).attr('href');
        let issueLink = "https://github.com" + ans;
        bodyIssue(issueLink, dir);
    }
}

function bodyIssue(issueLink, dir) {
    request(issueLink, cb);
    function cb(error, response, html) {
        if (error)
            console.log("error");
        else
            handleIssue(html, issueLink, dir);
    }
}

function handleIssue(html, issueLink, dir) {
    let $ = cheerio.load(html);
    let isuNos = $('.d-flex .opened-by');
    let temp = [];
    let fileName;
    for (let i = 0; i < 8; i++) {
        let text = $(isuNos[i]).text();
        let issueNo = text.trim().split(' ')[0];
        issueNo = issueNo.split('\n')[0];
        issueNo = issueNo.slice(1, issueNo.length);
        let fIssueLink = issueLink + '/' + issueNo;
        let arr = fIssueLink.split('/');
        let topic = arr[3];
        let subTopic = arr[4];
        // console.log(subTopic);
        fileName = subTopic + '.json';
        fileName = path.join(dir, fileName);
        fs.openSync(fileName, "w");
        temp.push(fIssueLink);


    }
    let stringData = JSON.stringify(temp);
    // fs.writeFileSync(fileName, stringData);
    let pdfDoc = new pdfkit();
    pdfDoc.pipe(fs.createWriteStream(fileName));
    pdfDoc.text(stringData);
    pdfDoc.end();
}
