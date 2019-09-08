/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let n = nums.length;
    if (n === 0) return 0;
    let f = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        f[i] = 1;
        for (let j = 0; j < i; j++)
            if (nums[j] < nums[i]) f[i] = Math.max(f[i], f[j] + 1);
    }
    return Math.max(...f);
};