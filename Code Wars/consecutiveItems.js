const consecutive = (arr, a, b) => {

    // My solution
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if((arr[i] == a && arr[i+1] == b) || (arr[i] == b && arr[i+1] == a)){
            count++;
        }
    }
    if(count ==1){
        return true;
    }
    else{
        return false;
    }

    // another solution
    
    // let result =  Math.abs(arr.indexOf(a) - arr.indexOf(b) == 1);

    // if(result == 1){
    //     return true;
    // }
    // return false;


}

let array1 = [ 1, 3, 5, 7];
let a = 1;
let b = 3;
console.log(consecutive(array1, a, b));