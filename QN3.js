var readlineSync = require('readline-sync');

let firstnumber=parseInt(readlineSync.question('enter first number'))
let secondnumber=parseInt(readlineSync.question('enter second number'))

let product=firstnumber*secondnumber

console.log('product=',product)