/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 直接暴力破解吧 时间复杂度O（n2） ，空间复杂度O(1)
var twoSum = function(nums, target) {
    let n = nums.length - 1;
    for(let i = 0; i <= n - 1; i++){
        for(let j = i + 1; j <= n; j++) {
            if(nums[i] + nums[j] === target) return [i, j];
        }
    }
};
