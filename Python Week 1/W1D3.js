const str1 = "aaaabbcdddddddddd";

////////////////////////

// const str1 = "a3b2c12d10";

  //write function
  //a for loop
  //a new variable for new string
  //make a if loop to check if final result is the same length as original

function encodeStr(str) {
    var result = "";
    var count = 1;
    for (var i =0; i < str.length; i++){
            if(str[i]==str[i+1]){
            count++;
            }
            else{
                result+=str[i] + count;
                count = 1;
            }
        }
        if (result.length >= str.length){
            return str
        }
    return result
}


console.log(encodeStr(str1))


///////////////////////////

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */

// PSUDO CODE
// 1. create function that takes in a str
// 2. loop through string
// 3. logic for letter vs number
// 4. after loop ends, return string

// take in string(s)
// var longest palindrom
// test palindrom
// for loop starting from 0 to string length
//      for loop stating from 0 decrementing from end
// add to arr of test palindrom
// if number == number && test > longest longest = test palindrom
// 

function Paltester(arr){

var testPalindrome = ''
var longestPalindrome = ''

for(var i = 0; i < arr.length; i++){

    for(var x = arr.length; x > 0; x--){

      if (x == i){
        testPalindrome += x
      }
      if(testPalindrome > longestPalindrome){
        longestPalindrome = testpalindrome
      }
    
    }
      
  }
  return longestPalindrome
}


Paltester(str1)