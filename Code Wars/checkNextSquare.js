function isSquare (num){
    // if(num < 0){
    //     return -1;
    // }
    // if(Math.sqrt(num) %1 == 0){
    //     return Math.pow(Math.sqrt(num) +1, 2);
    // }
    // else if(Math.sqrt(num) %1 !=0){
    //     return -1;
    // }

    // // better version
    if(Math.sqrt(num) %1 == 0){
        return Math.pow(Math.sqrt(num) +1, 2);
    }
    return -1;
}
let num1 = 36;
console.log(isSquare(num1));
