// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

function median(nums1, nums2){
    // add the two arrays together
    let joinedArray = nums1.concat(nums2);

    // sort array ascending order
    joinedArray.sort((a,b) => a-b);
    console.log(joinedArray);

    let half = Math.floor(joinedArray.length / 2);
    console.log(half);
    console.log(joinedArray[half]);

    if(joinedArray.length %2 == true){
        return joinedArray[half];
    }
    else{
        return (joinedArray[half] + joinedArray[half-1])/2
    }
    
}

let nums1 = [1,2];
let nums2 = [3,4];

console.log(median(nums1, nums2));
