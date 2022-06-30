// take a number, rotate left. 56789 -> 67895
// keep first digit in place, rotate left other digits 67895 -> 68957
// keep first 2 digits in place, rotate left other digits 688957 -> 68579
// keep first 3 digits in place, rotate left other digits 68579 -> 68597
// over since keeping first four remains only one digit to be rotated

const maxRot =(n) =>{
    let result =[];
    // convert number to string then to an array
    let array = Array.from(n.toString());
    let count = 0;
    while(count < array.length -1){
        let number = array.splice(count, 1);
        console.log("Logging number")
        console.log(number);
        // converts number variable to number, then pushes to end of array
        array.push(Number(number));
        result.push(Number(array.join('')));
        count++;
    }
    // adds initial n to start of array
    result.unshift(n);
    // sort array in descending order
    result.sort((a,b) => b-a)
    return result;

}

let n = 56789;
console.log(maxRot(n));