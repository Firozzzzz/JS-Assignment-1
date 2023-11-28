var readlineSync = require('readline-sync');

let age=parseInt(readlineSync.question('age:'))

let ageeligibility=18

if(ageeligibility<=age){
   console.log('Eligible to Vote')
}
 if(ageeligibility>age){
   console.log('Not Eligible to Vote')
 }