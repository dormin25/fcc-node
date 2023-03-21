

// export method 1
// module.exports.items =['kiran',"sanam"];
// module.exports.person ={
//     name:'bmk',
//     work:"bric"
// }

const items =['kiran',"sanam"];
const person ={
    name:'bmk',
    work:"bric"
}


// export method 2
// module.export = person
// module.exports = items

//check?1a at app.js at line(28)
module.exports = person

// export method 3
// module.exports.person1 = person 
// module.exports.items1 = items

//export method 4
//module.exports = {person,items}
