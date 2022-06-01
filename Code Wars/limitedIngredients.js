function cakes(recipe, available) {
    let max = Number.MAX_VALUE;
    for (item in recipe) {
        if (!available.hasOwnProperty(item)) { // Base case
            return 0;
        }
        else {
            let amount = Math.floor(available[item] / recipe[item]);
            if (amount < max) {
                max = amount;
            }
        }
    }
    return max;
}