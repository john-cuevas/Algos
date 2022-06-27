// replace * from infected word with element from discovered
// infected = "A**Z*N*" discovered = "MAIG"
// AMAZING

// my solution
const uncensor =(infected, discovered) =>{
    let result =""
    let count = 0 ;
    if(discovered ==""){
        return infected
    }
    for(let i = 0; i < infected.length; i++){
        if(infected[i] != "*"){
            result +=infected[i]
        }
        else if(infected[i] == '*'){
            console.log(count)
            result += discovered[count];
            count++;
        }
    }
    return result;
}

// better solution

const uncensor2 = (infected, discovered) =>{
    const arr = [...discovered];
    return [...infected].map(el => el === '*' ? arr.shift() : el).join('')
}

let infected ="A**Z*N*";
let discovered ="MAIG"
console.log(uncensor2(infected))