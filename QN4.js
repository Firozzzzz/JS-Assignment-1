var readlineSync = require('readline-sync');

let lenght=parseInt(readlineSync.question('lenght:'))
let width=parseInt(readlineSync.question('width:'))

let area=(lenght*width)

console.log('area=',area)