// get number of divisors of given number

// my solution

const getDivisorsCnt = n =>{
    let result = [];
    for(let i = 1; i <=n; i++){
        if(n/i %1 == 0){
            result.push(i);
        }
    }
    return result.length;
}

// faster solution
const getDivisorsCnt1 = n =>{
    let count = 0;
    for(let i = 1; i <=n; i++){
        if(n/i %1 == 0){
            count++
        }
    }
    return count;
}

let n = 30;
console.log(getDivisorsCnt(n))