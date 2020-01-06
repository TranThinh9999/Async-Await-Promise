var promisefs = require('promise-fs');
// function onDone(docs){
//     console.log(docs); 
// }
function onError(err){
    console.log(err);

}
//cái then sẽ chứa callback fn
promisefs.readFile('thao1.txt', { encoding: 'utf8' })
    .then(docs => console.log(docs))
    .then(function () {
        return promisefs.readFile('thao2.txt', { encoding: 'utf8' });
    })
    .then(docs => console.log(docs))
    .then(function () { 
        return promisefs.readFile('thao1.txt', { encoding: 'utf8' }) })
    .then(function(docs){
        console.log(docs);      
    })
    .then(function(){
        return promisefs.readFile('thao2.txt',{encoding:'utf8'})
    })
    .then((docs)=>console.log(docs))
    .catch(onError)
