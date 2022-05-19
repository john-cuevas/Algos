function checkForUnique(str){
    var hashtable = {};
    for(var i = 0; i < str.length; i++){
        if(hashtable[str[i]] != null){
            hashtable[str[i]] = 1;
            return false;
        }
        else{
            hashtable[str[i]] = 0;
        }
    }
    return true;
}

// From book

function isUniqueChars2 (str){
    let checker = 0;
    for(var i = 0; i < str.length; i++){
        let val = str.charAt(i) - 'a';
        if((checker & (1 << val)) > 0){
            return false;
        }
        checker |= (1 << val);
    }
    return true;
}

str = 'cat';
console.log(checkForUnique(str));
// console.log(isUniqueChars2(str));
