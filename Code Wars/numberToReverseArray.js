function reverseNum (n){
    let arr = Array.from(n.toString(), Number);

    // toString() and split("") do same thing, convert string to an array of strings

    // Array.from creates an array, Number converts string elements of array into a number
    // let arr = n.toString().split("");
    return arr.reverse();
}

let num1 = 12345;
console.log(reverseNum(num1));