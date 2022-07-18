const digital_root = (n) => {
    let str = String(n).split('');
    let result = 0;

    for (let i = 0; i < str.length; i++) {
        let num = parseInt(str[i])
        result += num;
    }

    // console.log("first result " + result)

    if(result.toString().length > 1){
        return digital_root(result);
    }
    return result;
}

let n = 132189;
console.log(digital_root(n))