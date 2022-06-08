function sumTwoSmallestNumbers(numbers) {
    let result = [];

    // makes sure result array is only positive numbers
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 0){
            result.push(numbers[i]);
        }
    }
    // sort array
    result.sort((a,b) => a - b);
    console.log(result);

    return result[0] + result[1];
}

let numbers1 = [5, 8, 12, 9, 22];
console.log(sumTwoSmallestNumbers(numbers1));