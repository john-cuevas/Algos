user1 = {
    username: "user1", // at least 2 characters
    age: 30,// must be positive
    password: "password",  // at least 8 characters
    confirm: "password" // confirm must match password
}

user2 = {
    username: "u", // at least 2 characters
    age: 30,// must be positive
    password: "password",  // at least 8 characters
    confirm: "pass" // confirm must match password
}

function errorCheck(user) {
    // given an object, if any of the fields fails the validation, return true
    let userError = false
    let ageError = false
    let passwordError = false
    let confirmError = false

    if (user.username.length < 2) {
        userError = true;
    }
    if (user.age < 0) {
        ageError = true
    }
    if (user.password.length < 8) {
        passwordError = true
    }
    if (user.confirm !== user.password) {
        confirmError = true
    }
    if (userError || ageError || passwordError || confirmError) {
        return true
    } else {
        return false
    }


}

function goodUser(user) {
    let userError = false
    let ageError = false
    let passwordError = false
    let confirmError = false

    if (user.username.length < 2) {
        userError = true;
    }
    if (user.age < 0) {
        ageError = true
    }
    if (user.password.length < 8) {
        passwordError = true
    }
    if (user.confirm !== user.password) {
        confirmError = true
    }
    if (userError && ageError && passwordError && confirmError) {
        return true
    } else {
        return false
    }
}
console.log(errorCheck(user1))
console.log(errorCheck(user2))

console.log(goodUser(user1))
console.log(goodUser(user2))