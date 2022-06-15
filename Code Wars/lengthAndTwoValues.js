function alternate(n, firstValue, secondValue) {
    let result = [];

    // base case if n = 1
    if (n == 1){
        result.push(firstValue);
    }

    for (let i = 0; i < n; i++) {

        if( i %2 == 0){
            result.push(firstValue);
        }
        else{
            result.push(secondValue);
        }
    }
    return result;
}

let n = 5;
let firstValue = "true";
let secondValue = "false";

console.log(alternate(n, firstValue, secondValue));