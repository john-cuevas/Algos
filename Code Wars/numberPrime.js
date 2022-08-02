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

    console.log(result);

    if(result.length == 2){
        return true;
    }
    else{
        return false;
    }
    
}

let num = 11;
console.log(isPrime(num))