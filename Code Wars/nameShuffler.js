function nameShuffler(str) {
    // let newStr = str.split(" ");

    // Don't even need swap

    //   let temp = newStr[0];
    //   newStr[0] = newStr[1];
    //   newStr[1] = temp;

    // [newStr[0], newStr[1]] = [newStr[1], newStr[0]];

    // let result = newStr[1] + " " + newStr[0];

    // return result;

    // One line solution
    // split turns string into an array
    // reverse swaps order of the array
    // join combines the elements of the array into a string

    return str.split(" ").reverse().join(" ");
}

let str1 = "John Cuevas";
console.log(nameShuffler(str1));
