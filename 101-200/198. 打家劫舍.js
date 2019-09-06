/**
 * @param {number[]} nums
 * @return {number}
 * f[i] 表示在前i个数中选，所有不选nums[i]的选法的最大值
 * g[i] 表示在前i个数中选，所有选择nums[i]的选法的最大值
 */


 /**
  * f[i] 表示不选第i个数
  * f[i] = 从i - 1个数里面选最大值，f[i - 1]不选择，g[i - 1]选择，从不选中或者选择之间取最大值
  * f[i] = Math.max(f[i - 1], g[i - 1])
  * g[i] = f[i - 1] + nums[i] // g[i] 选择，那上一个必须不选，加nums[i]当前数
  */
var rob = function (nums) {
    let n = nums.length;
    let f = new Array(n + 1).fill(0), g = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        f[i] = Math.max(f[i - 1], g[i - 1]);
        g[i] = f[i - 1] + nums[i - 1];
    }
    return Math.max(f[n], g[n]);
};