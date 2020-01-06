// add().then(function (result) {
//     console.log(result * 100);
// })

//-------------------------------------------------------------------------------------
var fs = require('fs');

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { encoding: 'utf8' }, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}
//**Cách 1 này dùng promise khó nhìn dẫn đến cách ở DƯỚI */
readFile('taolao.txt').then(doc => {
    console.log(doc);
    return readFile('taolao2.txt')
})
.then(doc2=>{
	console.log(doc2);
	return readFile('taolao3.txt')
})
.then(doc3=>console.log(doc3))
.catch(error=>console.log(error))

//Cách 2 : dùng async-await(dễ nhìn hơn) :
async function read() {
    try {
        let res1 = await readFile('taolao.txt');
        console.log(res1);
        let res2 = await readFile('taolao2.txt');
        console.log(res2);
        let res3 = await readFile('taolao3.txt');
        console.log(res3);
        return [res1, res2, res3];
    } catch (error) {
        console.log(error);
    }
}
read();
// read().then(data => console.log(data))

//-------------------------------------------------------------------------------------
//k quan tâm thứ tự xuất ra thì có thể làm như sau:
async function readPromiseAll(){
    try {
        var res1=readFile('taolao.txt');
        var res2=readFile('taolao2.txt');
        var res3=readFile('taolao3.txt');
        let results=await Promise.all([res1,res2,res3]);
        // console.log(`1=`,results)
        return results
    } catch (error) {
        console.log(error);

    }
}
readPromiseAll().then(data=>console.log(`dưới nhưng ra trước=`,data))









