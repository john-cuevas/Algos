// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// O(n)^2
function twoSum(nums, target) {
    let solution = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                solution.push(i);
                solution.push(j);
            }
        }
    }
    return solution;
}

// More optimal solution
function twoSum2(nums, target){
    let map = {};
    for(let i = 0; i < nums.length; i++){
        // assign nums[i] an index
        map[nums[i]] = i;
    }
    for(let i = 0; i < nums.length; i++){
        let goal = target - nums[i];
        if(map[goal] == null || i == map[goal]){
            return("No solution")
        }
        else{
            return [i, map[goal]];
        }
    }
}

let nums1 = [2, 6, 8];
let target1 = 4 ;

// console.log(twoSum(nums1, target1));
console.log(twoSum2(nums1, target1));
