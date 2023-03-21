const num1 = 5,num2 =10;
function addValue(){
    console.log(`the sum is ${num1 + num2}`);
}
// addValue(); // for directly get the result when imported in app.js directly 
module.exports = addValue // we have call the function 

function sub(){
    console.log(`sum is ${num1-num2}`);
}
sub(23,43)
