function arePermutation (str1, str2){
    
    // length of each string - permutation must be same length
    let n1 = str1.length;
    let n2 = str2.length;
    if(n1 != n2){
        return false;
    }

    let ch1 = str1.split(' ');
    let ch2 = str2.split(' ');

    // sort both strings (ascending order)
    ch1.sort();
    ch2.sort();

    // compare sorted strings

    for(let i = 0; i < n1; i++){
        if(ch1[i] != ch2[i]){
            return false;
        }
    }
    return true;

}

// Test code 

let str1 = "test";
let str2 = "stet";

console.log(arePermutation(str1, str2))