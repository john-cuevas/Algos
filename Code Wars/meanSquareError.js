const meanSquareError = (array1, array2) =>{

    // array lengths need to be equal
    if(array1.length != array2.length){
        return false;
    }

    // result array
    let result = [];
    for(let i = 0; i < array1.length; i++){
        let val = Math.pow(Math.abs(array1[i] - array2[i]), 2);
        result.push(val);
    }

    // take average of values in result array
    let avg = 0;
    for(let i = 0; i < result.length; i++){
        avg+=result[i];
    }

    return avg/result.length;
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(meanSquareError(array1, array2));
