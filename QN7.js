var readlineSync = require('readline-sync');

let number=parseInt(readlineSync.question('Enter number : '));

if(number>0){
    console.log("")

}else if(number<0){
    console.log("Negative")

}else{
    console.log("")
}
