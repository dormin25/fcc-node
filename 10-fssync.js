const {readFileSync,writeFileSync} = require('fs')
console.log("s2- tart the task")
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log("",first,"--",second) // comment this while running the 2,12,

// check? in the above readFile without writing the utf8
// while reading the file if we don't write the file then it displays in the form of like this buffer so by utf8 it will understand that the file text should be display in the form of text 

// <Buffer 68 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 78 74>

writeFileSync(
    './content/result_sync.txt',
    `hello this is created new then - ${first}, ${second}`,
    // {flag :'a'},//chcek?
     // flag means append ,so it doesn't overwrite simply it will append 
    'utf8')
console.log("12-done with the task")
console.log("14-starting the next one")
// it is simply overwrite the exixsting text if it is present ,and in case if the file was not exixt then it will created new 
//check? write some text in that file and see the difference
