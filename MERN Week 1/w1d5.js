// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

const sortedA1 = [];
const sortedB1 = [];
//expected output: [];

const sortedA2 = [5];
const sortedB2 = [2];
//expected output: [2, 5];

const sortedA3 = [2, 3, 4, 7];
const sortedB3 = [5];
//expected output: [2, 3, 4, 5, 7];

const sortedA4 = [1, 2, 4, 6, 9];
const sortedB4 = [3, 7, 8, 10, 11, 12];
//expected output: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];



// compare the length of the two arrays to find the longest one. And then set the longest array length as a length variable.
// create empty array
// set i = 0, j = 0
// while (i is less than length)
// start looping, inside loop compare i to j
// if arr1[i] < arr2[j], push arr1[i]
// if arr2[j] < arr[i], push arr2[j]
// if arr1[i] === null, push arr2[j]
// if arr2[j] === null, push arr1[i]

function merge(arr1, arr2) {
    let length1 = arr1.length
    let length2 = arr2.length
    let expected = []
    if (length1 > length2) {
        let length = length1
    }
    else {
        length = length2
    }
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            expected.push(arr1[i])
            i++
        }
        if (arr1[j] < arr2[i]) {
            expected.push(arr2[j])
            j++
        }
    }

    while (arr1[i] < arr2[j]) {
        expected.push(arr1[i])
        i++
    }
    while (arr2[j] < arr1[i]) {
        expected.push(arr2[j])
        j++
    }

    return expected
}

console.log(merge(sortedA4, sortedB4))


function mergeSort(arr) {
    //given an unsorted array, return a sorted array using mergeSort
    //HINT: keep separate the array until they are 2 sorted arrays
    //HINT2: You may need to have a recursive function
    //HINT3: Make use of the Merge function you created
}

    // const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];