function replaceDots(str) {

    // return str.replace(/\./g,'-')

    return str.replaceAll(".", "-")
}

let str1 = "1.2.3";
console.log(replaceDots(str1));
