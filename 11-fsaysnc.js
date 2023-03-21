const {readFile,writeFile} = require('fs')

//call back function 
console.log("start the task")
readFile('./content/first.txt','utf8',(err,result)=>{
if(err){
    console.log(err)
    return
}
const first = result ;
readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return 
    }
    const second = result;
    writeFile('./content/result-async.txt',`the asybn result is , ${first},${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return 
        }
        console.log("doen with the task")
    })
    })
 // displays the content in the first.txt

})
console.log("stating the next one ")
