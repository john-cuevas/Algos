const passwordGenerator = (length)=>{
    let password ="";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    while(password.length < length){
        password += possible.charAt(Math.floor(Math.random()* possible.length));
    }
    return password;
}

let length = 8;
console.log(passwordGenerator(length))