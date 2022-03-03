// function convertTime(dt){
//     let date = new Date(dt*1000);
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds =date.getSeconds();
//     let day = date.getDate();

//     // let formatted_time = hours+':'+ minutes;
//     let formatted_time = day;
//     return formatted_time
// }

// console.log(convertTime(1646180431))

/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

/*
create a function
create a variable for comparison which is array[array.length-1/2]
if searchNum == compareNum return True
else if array dices are too small then return False (array.length <= 1)
else if searchNum < compareNum then limit the indices accordingly and call the function
else searchNum > compareNum then limit the indices accordingly and call the function
*/

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum) {
    //index variables
    var compareNum = sortedNums[Math.floor((sortedNums.length-1)/2)];
    // console.log("This is the compare number: ", compareNum);
    if (searchNum == compareNum) {
        return true;
    }
    else if (sortedNums.length <= 1) {
        return false;
    }
    else if (searchNum < compareNum) {
        // console.log(sortedNums.slice(0,(sortedNums.length/2)));
        return binarySearch(sortedNums.slice(0,(sortedNums.length/2)), searchNum);
    }
    else {
        // console.log(sortedNums.slice((sortedNums.length/2)));
        return binarySearch(sortedNums.slice((sortedNums.length/2),sortedNums.length), searchNum);
    }
}

console.log(binarySearch(nums1, searchNum1));
console.log(binarySearch(nums2, searchNum2));
console.log(binarySearch(nums3, searchNum3));
console.log(binarySearch(nums4, searchNum4));
console.log(binarySearch(nums5, searchNum5));

module.exports = { binarySearch };

/*****************************************************************************/

/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {}

module.exports = { reverseStr };

/*****************************************************************************/