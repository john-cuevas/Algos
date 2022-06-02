function removeEveryOther(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (i % 2 !== true) {
            console.log(arr);
            arr.splice(i, 1);
            console.log(arr);

        }
    }
    return arr;
}

let arr1 = ["keep", "remove", "keep", "remove", "keep"];
console.log(removeEveryOther(arr1));