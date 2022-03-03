/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
  pseduo-code:
  1. use function rotateStr below that takes in the str and a number(amt)
  2. 
*/

// 1. create function
// 2. create empty variable for newstr
// 3. for loop to iterate through og string
//      4. start at end str.length, push to new str str[i] += newstr
//          5. for loop to iterate through og string again 
//              6. start at var j = 0, push to newstr up until str.length-i
const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */

//  return result += str[(str.length-1)-amnt]

// 1. create function
// 2. create empty variable for newstr, count variable
// 3. for loop to iterate through og string
//      4. start at end str.length-1, push to new str str[i] += newstr
//          5. for loop to iterate through og string again 
//              6. start at var j = 0, push to newstr up until str.length-i

function rotateStr(str, amnt){
    var result = '';
    for (var i = str.length -amnt; i >=0; i--){
        result += str[i]
        for (var j = 0; j <str.length-amnt; j++){
            result += str[j]
        }
        break
    }
    return result 
}

var amnt = 1;
console.log(rotateStr (str, amnt))

module.exports = { rotateStr: rotateStr2 };



// ------------------------------------------------------------------------------------------------



/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
const expected1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD";
const strB2 = "CDBA";
const expected2 = false;
// Explanation: all same letters in 2nd string, but out of order

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {}

module.exports = { isRotation };