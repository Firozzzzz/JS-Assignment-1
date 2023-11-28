var readlineSync = require('readline-sync');



let mark=parseInt(readlineSync.question("mark:"));
if (mark>=60){
    console.log("PASSED");

}
else{
    console.log("FAILED");
}