function fakeBin(x) {
    let result = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] < 5) {
            result += '0';
        }
        else{
            result += '1';
        }
    }
    return result;

}

let x1 = "464646";
console.log(fakeBin(x1));