// For Union
const numsA4 = [1, 2, 2, 2, 7];
const numsB4 = [2, 2, 6, 6, 7];
const expected4 = [1, 2, 2, 2, 6, 6, 7];

const numsA5 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB5 = [2, 2, 6, 6, 7];
const expected5 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];
/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * https://www.researchgate.net/publication/332453167/figure/fig1/AS:748486492450816@1555464494152/A-Venn-diagram-of-unions-and-intersections-for-two-sets-A-and-B-and-their-complements.png
 */
// For Intersection
const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7]; //repeated: 2, 2, 7
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

// Pseudo Code
// create function that takes 2 arrays
// create new array
// let i = 0;
// let j = 0;
// let stillRunning = true
// while (stillRunning)
// if statement comparing nums1[i] with nums2[j]
//   if ===, push into new array
//   else if nums1[i] < nums2[j]
//     i++
//   else if nums1[i] > nums2[j]
//     j++
//   if i >= arr1.length
//      break
//   if j >= arr2.length
//      break

//   
// return new array

//given 2 sorted array in different length, find the nums that are intersect and return the array 
//****  nums that appeared in both array.
function orderedIntersection(nums1, nums2) {
    let i = 0;
    let j = 0;
    let stillRunning = true
    let newArray = []
    while (i < 6) {
        if (nums1[i] === nums2[j]) {
            newArray.push(nums1[i])
            i++
            j++
        }
        else if (nums1[i] < nums2[j]) {
            i++
        }
        else if (nums1[i] > nums2[j]) {
            j++
        }
    }
    return newArray
}

console.log(orderedIntersection(numsA1, numsB1))

function orderedMultisetUnion(sortedA, sortedB) {
    //given 2 sorted array in different length, find the union of both set and return the array 
    //**** all nums that appeared in either array.

}

