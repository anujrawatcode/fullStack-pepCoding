
function helpFn() {
    console.log(`List of All the commands:
                        node main.js tree "directoryPath"
                        node main.js organize "directiryPath"
                        node main.js help`);
}

module.exports = {
    helpKey: helpFn
}
// object will be export