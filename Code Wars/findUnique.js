const findUnique = arr =>{

    // sorts array 
    arr.sort((a,b) => a-b)
    return arr[0]==arr[1]?arr.pop():arr[0]
}

let arr = [1, 1, 2, 1, 1];
console.log(findUnique(arr))