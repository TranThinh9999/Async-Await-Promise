var fs=require('fs');
function readFilePromise(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{encoding:'utf8'},function(err,data){
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}
//cách 1 (dùng promise):
readFilePromise('thao1.txt').then(data=>{
    console.log(data);
    var x =readFilePromise('thao2.txt') ;
    return x;
})
.then(doc=>{
    console.log(doc)
    return readFilePromise('thao1.txt')
})
.then(doc=>{
    console.log(doc);
    return readFilePromise('thao2.txt')
})
.then(data=>console.log(data))
.catch(err=>console.log(err))

//cách 2(dễ nhìn hơn)
async function read1212(){
    try{
        let doc1=await readFilePromise('thao1.txt');
        console.log(doc1)
        let doc2=await readFilePromise('thao2.txt');
        console.log(doc2)
        let doc3=await readFilePromise('thao1.txt');
        console.log(doc3)
        let doc4=await readFilePromise('thao2.txt');
        console.log(doc4)
    }catch(err){
        console.log(err)
    }
}


