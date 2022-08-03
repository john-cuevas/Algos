// remove zeros and move to end of array - keeping order
// without using a temp array and push(), shift(), etc

const removeZeros = array => {
    let limit = array.length
    let temp;
    for (let i = 0; i < limit; i++) {
        if (array[i] === 0 || array[i] === "0") {
            temp = array[i];

            // iterate through array again
            for (let j = i--; j < array.length - 1; j++) {
                array[j] = array[j + 1];
            }
            array[array.length - 1] = temp;
            limit--;
        }
    }
    return array;
}

let array = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

console.log(removeZeros(array))
