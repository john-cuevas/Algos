function compressString(str){
    let res = '';
    let count = 1;
    for(var i = 0; i < str.length; i++){
        let current = str[i];
        let next = str[i+1];
        if(current == next){
            count++;
        }
        else{
            res += current +String(count); // String converts count to string
            count = 1; // reset count to 1
        }
    }
    if(res.length < str.length){
        return res;
    }
    return str;
}

let str1 = 'aaabbbcccdddd';
let str2 = 'bbbcc';
let str3 = 'aab';

console.log(compressString(str1));
console.log(compressString(str2));
console.log(compressString(str3));

// only works when string is in order