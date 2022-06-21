function sevenAteNine(str){
    // g is a global variable
    return str =  str.replace(/797/g, "77")
}

let str1 = "165561786121789797";
console.log(sevenAteNine(str1));