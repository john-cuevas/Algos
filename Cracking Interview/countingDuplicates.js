function duplicateCount(text) {
    let test = "abcdefghijklmnopqrstuvwxyz";
    text = text.toLowerCase();
    let freqTable = {};

    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
        if (freqTable.hasOwnProperty(text[i])) {
            freqTable[text[i]] += 1;
        }
        else {
            freqTable[text[i]] = 1;
        }
    }
    let count = 0;

    for (key in freqTable) {
        if(freqTable[key] > 1){
            count++;
        }
    }
    return count;
}

// console.log(duplicateCount(""));
// console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));