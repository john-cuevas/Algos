function countPositivesSumNegatives(input) {
    let positiveSum = 0;
    let negativeSum = 0;
    // did this to account for zeros in array. 0 doesn't count as positive or negative
    let zeros = 0;
    if (!input || input.length == 0) {
        return [];
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positiveSum++;
        }
        else if (input[i] == 0) {
            zeros++;
        }
        else {
            negativeSum += input[i];
        }
    }
    return [positiveSum, negativeSum];
}