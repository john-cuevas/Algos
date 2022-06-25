// array is an array of all possibilities if it contains all numbers between [0, a.length -1];

const isAllPossibilities = (x) =>{
    let count =0;
    // let length = x.length -1;
    // My solution - not correct
    // if(x.length ==0){
    //     return false;
    // }
    // for(let i =0; i< x.length; i++){
    //     if(x[i]< 0 || x[i] >= length){
    //         count++;
    //     }
    // }
    // console.log([0, length]);
    // console.log(count);
    // if(count == 0){
    //     return true;
    // }
    // return false;

    // correct solution
    if(x.length >=1){
        for(let i =0; i < x.length; i++){
            if(x.includes(i)){
                count++;
            }
        }
        return count === x.length;
    }
    else{
        return false;
    }
    

}

let arr1 = [0, 0, 1, 2];
console.log(isAllPossibilities(arr1));