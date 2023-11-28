var readlineSync = require('readline-sync');

let firstno=parseInt(readlineSync.question('enter first no'))
let secondno=parseInt(readlineSync.question('enter second no'))

console.log('sum=',firstno+secondno);