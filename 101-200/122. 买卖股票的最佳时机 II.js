/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (nums) {
    let ans = 0;
    for (let i = 0; i < nums.length; i++)
        if (nums[i] > nums[i - 1])
            ans += nums[i] - nums[i - 1]
    return ans;
};