/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/
// double for loop
// set count variable 
// increment the count variable as we go through the for loop

// if variable i == i+1 count variable increases
// double for loop// 

//first for loop holds the first variabl
//second for loop cycles through the list
//if compares the first variabl

//first for loop holds the first variable
//second for loop cycles through the list
// have a variable that hold the sum of the same variables
//if compares the first variable with the second variable
//the code in the if block sum to a variable if there is a match


const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
 function frequencyTableBuilder(arr) {
    var dict = [];
      for (var i = 0; i <arr.length; i++){
        if (arr[i] in dict){
        dict[arr[i]]++;
        } 
        else{
            dict[arr[i]] =1;
        }   
      }
    return dict
  }

console.log(frequencyTableBuilder(arr1));



// function frequencyTableBuilder(arr) {
//     var dict = [];
//     var count = 0; 
//       for (var i = 0; i <arr.length; i++){
//         if (arr[0] == arr[i]){
//         count++;
//       }
//       dict.push({key: arr[i], value: count});
          
            
          
//       }
//     return dict
//   }

module.exports = { frequencyTableBuilder };

/*****************************************************************************/


// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {}

/*****************************************************************************/
