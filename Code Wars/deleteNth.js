// create a new list that contains each number of list at most N times, without reordering.

const deleteNth = (arr,n) => {
    let count = 0;
    let pointer = 0;
    for (let i = 0; i < arr.length; i++){
        if(pointer == 0){
            pointer += arr[i];
        }
        if(pointer == arr[i]){
            console.log(pointer)
            count ++;
            if(count > n){
                arr.splice(i, 1)
            }
        }
    }
    return arr
}

let arr = [20,37,20,21];
let n = 1;
console.log(deleteNth(arr, n));