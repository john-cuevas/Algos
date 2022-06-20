function isSquare (num){
    if(num < 0){
        return false;
    }
    if(Math.sqrt(num) %1 == 0){
        return true
    }
    else if(Math.sqrt(num) %1 !=0){
        return false;
    }
}
let num1 = 3;
console.log(isSquare(num1));
