// sort colors adjacent in the order of red, white, blue
// 0 -> red
// 1 -> white
// 2 -> blue

// solve without using sort function

const sortColors = (nums) => {
    let count = 0;
    let count1 = 0;
    let count2 = 0;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            count++;
        }
        else if(nums[i] == 1){
            count1++;
        }
        else if(nums[i] == 2){
            count2++;
        }
    }
    for(let i =0; i < nums.length; i++){
        if(count > 0){
            nums[i] = 0;
            count--;
        }
        else if(count1 > 0){
            nums[i] = 1;
            count1--;
        }
        else {
            nums[i] = 2;
        }
    }

    return nums;

}
let nums1 = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums1))