/* 
  Recursively build a string out of an array of strings
*/



const string1 = ["h", "e", "l", "l", "o"];
const expected1 = "hello";

const string2 = ["h", "e", "l", "l", "o", " ", "wo", "rld"]
const expected2 = "hello world"

/**
 * Add params if needed for recursion
 * Recursively build a string out of an array of strings.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} strings
 * @returns {string} The result of combining all of the strings from the input array.
 */

/** -- psuedo code --
 *  base cases:
 *  IF strings.length == 0
 *    return 0 
 * ELSE IF strings.length == 1
 *    retrun strings[0]
 * 
 * return strings[0] + buildString(strings.splice(1)))
 */





function buildString(strings) {
    if (strings.length == 0) {
        return 0
    }
    else if (strings.length == 1) {
        return strings[0]
    }
    return strings[0] + buildString(strings.slice(1))

}
module.exports = { buildString };


console.log(buildString(string2))

//  ------------------------------------------------------------------------------------------------------------------------------------------



/** 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
**/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 **/

/** -- psuedo code --
 *  base cases:
 *  IF num < 0 
 *    return 0 
 * ELSE IF strings.length == 1
 *    retrun strings[0]
 * 
 * return strings[0] + buildString(strings.splice(1)))
 */

function recursiveSigma(num) {
    if (num < 0) {
        return 0
    }
    else if (num == 1) {
        return 1
    }

    return Math.floor(num) + recursiveSigma(num - 1)
}


module.exports = { recursiveSigma };


console.log(recursiveSigma(num3))