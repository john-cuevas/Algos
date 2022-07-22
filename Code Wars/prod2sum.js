const prod2sum = (a, b, c, d) =>{
    let left = a*a + b*b;
    let right = c*c + d*d;
    let result = left * right;
    let length = Math.round(Math.sqrt(result))
    let arr = [];

    for(let i = 1; i <= length; i++){
        for(let j = 1; j <= length; j++){
            if(i*i + j*j == result){
                arr.push([i, j]);
            }
        }
    }

    // need check for similar solutions

}

let a = 1;
let b = 2; 
let c = 1;
let d = 3;
console.log(prod2sum(a, b, c, d))