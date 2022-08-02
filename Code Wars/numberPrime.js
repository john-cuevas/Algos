const isPrime = num =>{

    // numbers have to be greater than 0
    if(num < 0){
        return false;
    }
    let result = [];
    for(let i = 0; i <= num; i++){
        if(num / i %1 ==0){
            result.push(i);
        }
    }

    if(result.length == 2){
        return false;
    }
    else{
        return true;
    }
}

let num = 11;
console.log(numberPrime(num))