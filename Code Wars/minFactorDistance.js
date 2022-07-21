const minDistance = n =>{
    const result = [];
    for(let i = 0; i <= n; i++){
        if(n / i %1 == 0){
            result.push(i);
        }
    }
    let diff = Number.MAX_VALUE;
    for(let i = 0; i < result.length; i++){
        if((result[i+1] - result[i])< diff){
            diff = result[i+1] - result[i]
        }
    }
    console.log(result)
    return diff;
}

let n = 13013;
console.log(minDistance(n))