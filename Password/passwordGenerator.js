const passwordGenerator = (length, low, up, num, pun) => {
    let password = "";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = lowercase.toUpperCase();
    let numbers = "0123456789";
    let punctuation = "!@#$%";
    let char = [lowercase, uppercase, numbers, punctuation];
    let possible = "";
    let bool = [low, up, num, pun];

    for (let i = 0; i < bool.length; i++) {
        if (bool[i] == true) {
            possible += char[i];
        }
    }

    // In case user doesn't select any type of characters

    if(possible.length == 0){
        return "At least one type of character must be selected";
    }

    while (password.length < length) {
        password += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    // if both numbers and punctuation types are selected

    if (bool[2] == true && bool[3] == true) {
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
        else {
            // call function again
            return passwordGenerator(length, low, up, num, pun)
        }
    }

    // punctuation is selected and numbers are not
    else if(bool[2] == false && bool[3] == true){
        let punCount = 0;
        for (let i = 0; i < punctuation.length; i++) {
            if (password.includes(punctuation[i])) {
                punCount++
            }
        }
        console.log("pun" + punCount)
        if (punCount > 0) {
            return password;
        }
        else {
            // call function again
            return passwordGenerator(length, low, up, num, pun)
        }
    }
    // numbers are selected and punctuation is not
    else if(bool[2] == true && bool[3] == false){
        let numCount = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (password.includes(numbers[i])) {
                numCount++
            }
        }
        console.log("num" + numCount)
        if (numCount > 0) {
            return password;
        }
        else {
            // call function again
            return passwordGenerator(length, low, up, num, pun)
        }
    }
    else if(bool[2] == false && bool[3] == false){
        return password
    }

}

let length = 8;
let low = true;
let up = true;
let num = true;
let pun = true;
console.log(passwordGenerator(length, low, up, num, pun))