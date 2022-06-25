// array is an array of all possibilities if it contains all numbers between [0, a.length -1];

const isAllPossibilities = (x) =>{
    let count =0;
    let length = x.length -1;
    for(let i =0; i< x.length; i++){
        if(x[i]< 0 || x[i] >= length){
            count++;
        }
    }
    if(count == 0){
        return true;
    }
    return false;

}

let arr1 = [1, 2, 4, 3];
console.log(isAllPossibilities(arr1));