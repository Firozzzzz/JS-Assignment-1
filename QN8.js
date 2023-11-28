var readlineSync = require('readline-sync');

let age=parseInt(readlineSync.question("Enter Your Age :"));

if(age<=12){
    console.log("Child'");
}

else if(age<=19){
    console.log("Teenager");
}

else if(age<=59){
    console.log("ADULT");
}

else{
    console.log("SENIOR");
}