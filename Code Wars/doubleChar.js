function doubleChar(str) {

    var result =  "";
    for(let i = 0; i< str.length; i++){
        result +=  str[i] + str[i];
    }
    return result;
}

let str1 = "helllo worldd";
console.log(doubleChar(str1));


