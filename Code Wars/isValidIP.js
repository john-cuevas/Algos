const isValidIP = str => {
    const values = str.split(".")
    console.log(values.length)
    if (values.length != 4) {
        return false;
    }
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        // contains character
        const invalidCharacter = value.indexOf("e") > -1;
        const negativeValue = value < 0;
        // starts with leading 0
        const invalidZero = value.length > 1 && value.indexOf("0") == 0;
        const maxExceeded = value > 255;
        // contains spaces
        const containSpaces = value.indexOf(" ") > -1 || value.indexOf("\n") > -1;
        if (invalidCharacter || negativeValue || invalidZero || maxExceeded || containSpaces) {
            return false;
        }
    }
    return true;
}

let str = "1.2.450";
isValidIP(str)