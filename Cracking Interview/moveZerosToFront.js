function moveZeros(arr) {
    let count = 0;
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) { // if arr[i] not equal to zero, push element to result array and then increment count
            result.push(arr[i]);
            count++;
        }
    }
    for (var j = count; j < arr.length; j++) { // this adds zeros to end of result array from count to arr.length
        result.unshift(0);
    }
    return result;
}

// SOLUTION WITHOUT MAKING A NEW ARRAY

function moveZeros2(arr) {
    let current = arr.length - 1;
    for(let i = current; i >= 0; i--){
        if(arr[i] !=0){
            arr[current] = arr[i];
            current--;
        }
    }
    while(current >= 0){
        arr[current] = 0;
        current--;
    }
    return arr;

}

let arr1 = [1,0, 2, 0, 3];
let arr2 = [1, 0, 'help', 1, 2];
console.log(moveZeros(arr1));
console.log(moveZeros2(arr1));
console.log("------------------")
// console.log(moveZeros(arr2));
// console.log(moveZeros2(arr2));

