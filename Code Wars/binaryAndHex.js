// if number is even, return binary
// if odd, return hex

// binary is base 2
// hex is base 16

function evensAndOdds(num) {
    if (num % 2 == 0) {
        return num.toString(2);
    }
    else {
        return num.toString(16);
    }
}
// faster solution

function evensAndOdds2(num) {
    return num.toString(n%2 ? 16 : 2);
}
