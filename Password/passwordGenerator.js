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

    while (password.length < length) {
        password += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return password;

}

let length = 8;
let low = true;
let up = false;
let num = true;
let pun = true;
console.log(passwordGenerator(length, low, up, num, pun))