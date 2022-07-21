// create a new list that contains each number of list at most N times, without reordering.

function deleteNth(arr, x) {
    var cache = {};
    return arr.filter(function (n) {
        cache[n] = (cache[n] || 0) + 1;
        return cache[n] <= x;
    });
}

let arr = [20, 37, 20, 21];
let n = 1;
let arr1 = [1, 2, 3, 1, 2, 1, 2, 3];
let n1 = 2;
console.log(deleteNth(arr, n));
console.log(deleteNth(arr1, n1));