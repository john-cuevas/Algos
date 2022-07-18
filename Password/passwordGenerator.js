const passwordGenerator = (length, low, up, num, pun) => {
    let password = "";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = lowercase.toUpperCase();
    let numbers = "0123456789";
    let punctuation = "!@#$%";
    let char = [lowercase, uppercase, numbers, punctuation];
    let possible = "";
    let bool = [low, up, num, pun];
    let count = 0;

    for (let i = 0; i < bool.length; i++) {
        if (bool[i] == true) {
            possible += char[i];
        }
    }

    while (password.length < length) {
        password += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    // Checking if specific characters exist in generated password
    let numCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (password.includes(numbers[i])) {
            numCount++
        }
    }

    console.log(password)
    console.log("num" + numCount)

    let punCount = 0;
    for (let i = 0; i < punctuation.length; i++) {
        if (password.includes(punctuation[i])) {
            punCount++
        }
    }
    console.log("pun" + punCount)
    if (numCount > 0 && punCount > 0) {
        return password;
    }
    else{
        // call function again
        return passwordGenerator(length, low, up, num, pun)
    }

}

let length = 8;
let low = true;
let up = true;
let num = true;
let pun = true;
console.log(passwordGenerator(length, low, up, num, pun))