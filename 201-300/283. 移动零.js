/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0, n = nums.length;
    for(let i = 0; i < n; i++){
        if(nums[i] !== 0) 
            nums[j++] = nums[i];
    }
    while (j < n) {
        nums[j++] = 0;
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));