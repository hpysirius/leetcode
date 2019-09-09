/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (nums) {
    let n = nums.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++)
            ans = Math.max(ans, nums[j] - nums[i]);
    }
    return ans;
};