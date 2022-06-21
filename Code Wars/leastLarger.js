function leastLarger(a, index) {

    let target = a[index];
    let largerValues = a.filter(num => num > target);
    let leastLargeValue = Math.min(...largerValues);

    return a.findIndex(num => num == leastLargeValue);
    
}

let arr1 = [1, 2, 3, 4];
let index1 = 1;
console.log(leastLarger(arr1, index1));