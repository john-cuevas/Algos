// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// psudo code
// create function that takes array
// for loop to iterate through 
// nested for loop 
// empty variable (max) to hold value at j
// compare highest to j+1, if less than - swap
function selectionSort(nums) {
    for(let i = 0; i < nums.length; i++){
        let max = nums[i]
        for (let j = 1; j <nums.length; j++){
            if(max < nums[j]){
                max = nums[j]
                pos = j
                
            }
        }
        // get max, do actual swap
        console.log(max)
        console.log(pos)
        nums[pos] = nums[nums.length-1]
        nums[nums.length-1] = max

        // console.log(max)
    }
    return nums
  //given an unsorted array, sort the array using selectionSort
  // i.e. find the largest value and put it at the end
}

console.log(selectionSort(numsRandomOrder))

// SOLUTION

// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js


// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function selectionSort(nums) {
  //Set size variable.
  //If this is not set, problems may arise if using nums.length instead.
    let size = nums.length;

    //If our array size is 1 or less, it is sorted.
    while (size > 1) {
        //Set our maxVal variable to the lowest possible number.
        //This way if we get small numbers (i.e. negatives), they can still be                maxVal.
        let maxVal = Number.MIN_VALUE;
        //Set an index variable so we can store the location of maxVal.
        let index;
        //Loop through array to find the largest value.
        for (let i = 0; i < size; i++) {
            //If the number at index i is greater than maxVal, it becomes the new                 maxVal and we store that index.
            if (nums[i] > maxVal) {
                maxVal = nums[i];
                index = i;
            }
        }
        //Once the for loop that finds the largest value finishes, we swap that               value with whatever is at the end of the array.
        nums[index] = nums[size - 1];
        nums[size - 1] = maxVal;
        //Decrement size to exclude the sorted value. If we were using nums.length            here instead, we would end up returning a 1 value array.
        size--;
    }
    return nums;
}

console.log(selectionSort(numsRandomOrder));
console.log(selectionSort(numsReversed));
