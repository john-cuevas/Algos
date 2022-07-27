// if array can be rotated x amount of times to equal sorted array
// return number
// otherwise return -1
// codesignal question

const checkRotate = arr =>{

    // created sorted array
    const sorted = [];
    for(let i = 1; i <= arr.length; i++){
        sorted.push(i);
    }
    // console.log("sorted")
    // console.log(sorted)
    let count = 0;
    for(let i = 0; i < arr.length - 1; i++){
        let last = arr.shift();
        arr.push(last);
        count++;
        
        // compare to sorted array
        if(arr === sorted){
            break;
        }
    }
    console.log("count")
    return count;

    
}

let arr = [3, 4, 1, 2]; // should return 2
console.log(checkRotate(arr))