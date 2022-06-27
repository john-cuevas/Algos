// convert first letter to uppercase
// my solution

const toJadenCase = (str) => {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = (words[i].charAt(0).toUpperCase()) + words[i].slice(1);
    }
    return words.join(" ");
}

// another notation
String.prototype.toJadenCase = function () {
    let words = this.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = (words[i].charAt(0).toUpperCase()) + words[i].slice(1);
    }
    return words.join(" ");
};
let str1 = "How can mirrors be real if our eyes aren't real";
console.log(toJadenCase(str1));