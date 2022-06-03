function isUpperCase(str) {
    let str1 = str.toUpperCase();
    if (str === str1) {
        return true;
    }
    return false;
}

let str1 = "Hi world";
let str2 = "HI w";
console.log(isUpperCase(str1));
console.log(isUpperCase(str2));