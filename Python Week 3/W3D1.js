/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visited indexes).
*/


// 1. For loop to iterate through array
// 2. empty variable to count spaces
// 3. If statement if less than 6 spaces between 1s, return false
const queue1 = [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    var count = 0;

    for (var i = 0; i < queue.length; i++) {
        if (queue[i] == 1) {
            for (var j = i + 1; j < queue.length; j++) {
                if (queue[j] == 0) {
                    count++;

                }
                else if (queue[j] == 1) {
                    if (count < 6) {

                        return false;
                    }

                }

                else if (queue[j] > 1){
                    if (count < 6) {

                        return false;
                    }
                }
            }
           count = 0; 
        }
        
    }
    return true;
}

console.log(socialDistancingEnforcer(queue2))

module.exports = { socialDistancingEnforcer };




// -------------------------------------------------------------------------------------------------------------------------------------------------------------------



/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 3, 9];
const expected2 = 1;

const nums3 = [1, 2, 99, 3]
const expected3 = 2

const nums4 = [9, 9];
const expected4 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) { }

module.exports = { balanceIndex };
