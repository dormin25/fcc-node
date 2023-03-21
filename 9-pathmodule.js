const path = require('path');

console.log("3-",path)

console.log("5-",path.sep) // 

const filepath = path.join('/content','/subfolder','/test.txt');
console.log("8-",filepath)

const base = path.basename(filepath) // at the end of the path file
console.log("11-",base)
