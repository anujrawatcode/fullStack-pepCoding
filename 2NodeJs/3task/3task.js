const fs = require("fs");



for (let i = 1; i <=5; i++) {
    fs.mkdirSync("Lecture-" + i);
    fs.writeFileSync("Lecture-" + i + "/readMe.txt", "readMe of Lecture  " + i);
}
