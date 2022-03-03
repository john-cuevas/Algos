/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */

/** 
  Psuedo Code
  - Initialize new dictionary
  - Loop through nums list
  - Check to see if nums[i] is in our dictionary
    - IF it isnt in our dictionary, APPEND it 
    - ELIF it already is, we just move on
  - Loop through dictionary and append it to a new list
*/

function dedupeSorted(nums) {
    var expected = {};
    for (var i = 0; i < nums.length; i++) {
        if (!(nums[i] in expected)) {
            expected[nums[i]] = i
        }
    }
    var output = []

    for (const [key, value] of Object.entries(expected)) {
        output.push(key)
        // console.log(`${key}: ${value}`);
    }

    return output;
}

console.log(dedupeSorted(nums3))

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

function dedupeSortedBetter(nums) {
    var output = []

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i + 1]) {
            output.push(nums[i])
        }
    }

    return output;
}
console.log(dedupeSortedBetter(nums3))

module.exports = { dedupeSorted };



//----------------------------------------------------------------------------------------------



/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

const nums6 = [3, 7, 5, 4, 3, 4, 6, 5];
const expected6 = 7;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) { }

module.exports = { firstNonRepeated };

/** PSUEDO CODE
  - Initialize empty dictionary
  - Loop through nums array
  - IF nums[i] is NOT in our dictionary
    -APPEND the value as a key
  - IF nums[i] IS in our dictionary
    - INCREMENT its value by one
  
  - Loop through dictionary
    - Return FIRST key with a value == 0
  

*/

function firstNonRepeated(nums) {
    var expected = {}
    for (var i = 0; i < nums.length; i++) {
        if (!(nums[i] in expected)) {
            expected[nums[i]] = 0
        }
        else if (nums[i] in expected) {
            expected[nums[i]]++
        }
    }

    console.log(expected)

    for (const key in expected) {
        console.log(key, expected[key]);
    }

    // for (const [key, value] of Object.entries(expected)) {
    //     if (value == 0) {
    //         return key
    //     }
    // }

}

console.log(firstNonRepeated(nums6))