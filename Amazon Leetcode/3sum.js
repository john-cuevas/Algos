// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

const threeSum = (nums) =>{
    nums.sort((a,b) => a-b)
    let result =[];

    for(let i = 0; i < nums.length -2; i++){
        if(nums[i] != nums[i-1]){ // make sure solution set does not contain duplicate triplets.
            let left = i+1;
            let right = nums.length -1;
            while(left < right){
                const currentSum = nums[i] + nums[left] + nums[right];
                if(currentSum === 0){
                    result.push([nums[i], nums[left], nums[right]]);
                    while(nums[left] == nums[left +1]){
                        left++;
                    }
                    while(nums[right] == nums[right -1]){ // make sure solution set does not contain duplicate triplets.
                        right--;
                    }
                    left++;
                    right--;
                }
                else if(currentSum < 0){
                    left++;
                }
                else if(currentSum >0){
                    right--;
                }
            }
        }
    }
    return result;


}

let nums1 = [-1,0,1,2,-1,-4];
let nums2 = [];
let nums3 = [0];
console.log(threeSum(nums1));
console.log(threeSum(nums2));
console.log(threeSum(nums3));