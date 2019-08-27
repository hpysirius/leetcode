/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 双指针算法 暴力 -> 单调性 -> 优化
var twoSum = function (nums, t) {
    let i = 0, j = nums.length - 1;
    while (nums[j] >= t && t > 0) j--;
    while (i < j) {
        if (nums[i] + nums[j] === t) return [i + 1, j + 1];
        if (nums[i] + nums[j] > t) j--
        else i++;
    }
};

console.log(twoSum([-3, 3, 4, 90], 0));