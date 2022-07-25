// get number of divisors of given number

// my solution

const getDivisorsCnt = n =>{
    let result = [];
    for(let i =0; i <=n; i++){
        if(n/i %1 == 0){
            result.push(i);
        }
    }
    return result.length;
}

let n = 30;
console.log(getDivisorsCnt(n))