function countPositivesSumNegatives(input) {
    let positiveSum = 0;
    let negativeSum = 0;
    if (input.length == 0) {
        return 0;
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positiveSum++;
        }
        else {
            negativeSum += input[i];
        }
    }
    return [positiveSum, negativeSum];
}