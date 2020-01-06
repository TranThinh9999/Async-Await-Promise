var fs = require('fs');
fs.readFile('thao1.txt', { encoding: 'utf8' }, function (err, data) {
    console.log(data);
    fs.readFile('thao2.txt', function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data);
        fs.readFile('thao3.txt', function (err, data) {
            console.log(data);
        })
    })
})
//nếu mà có 10 cái đoc file ntn thì nhìn nó như 1 cái kim tự tháp luôn
//=> callback hell 