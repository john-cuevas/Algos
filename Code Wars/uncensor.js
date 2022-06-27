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
let infected ="A**Z*N*";
let discovered ="MAIG"
console.log(uncensor(infected))