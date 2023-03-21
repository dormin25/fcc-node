const names = require('./4-names') // created modules at the starting you should give -./(dot)-
console.log("3-",names) // whatever the 


const utils = require('./5-utils')
console.log("7-",utils)
utils("john") // calling the sayhi function

// passing the arguments(from the names) in the function `utils`
utils(names.e)
utils(names.s)



const data = require('./6-diff_ways_export')

// import method 1
// console.log("19-",data)
// console.log("20-",data.items)
// console.log("21-",data.person)

//import method 2
// console.log("21-",data)
// console.log("25-",data.items)
// console.log("26-",data.person)

// check?1a see at 6-diff (line 21)
// console.log("29-",data) // prints the exported function only 

// import method 3
// console.log("29-",data)// prints the data(in the form of object values) present in the /6-diff_ways_export
// // this is exactly same as the names(line-3) and we are exporting functions seperately in 6-diff_ways_export
// console.log("31-",data.person1) 
// console.log("32-",data.items1) 

// direct importing 
// require('./7-mind-granade') //directly importing the 7-mind-gradane and in that file function would been called 

// instead of directly importing we stored in add variable then we are calling
// const add = require('./7-mind-granade');
// add()








