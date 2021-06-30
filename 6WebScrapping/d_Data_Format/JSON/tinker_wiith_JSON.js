const fs = require("fs");
let buffer = fs.readFileSync(__dirname + '/ArrayObject.json');
let data = JSON.parse(buffer);

// console.log(data);

data.push(
    {
        f_name: 'Aditya',
        l_name: 'Sharma',
        Eduction: { Course: 'B.Tech', Sem: '8th', College: 'GEU' },
        friends: ['Anuj', 'Aditya']
    }
);
let stringData = JSON.stringify(data);
fs.writeFileSync(__dirname + '/ArrayObject.json', stringData);


let data1 = require('./ArrayObject.json');
console.log(data1);