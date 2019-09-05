/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (nums) {
    let n = nums.length;
    let f = new Array(n);
    for (let i = 0; i < n; i++) f[i] = new Array(i)
    f[0][0] = nums[0][0];
    for (let i = 1; i < n; i++)
        for (let j = 0; j <= i; j++) {
            f[i][j] = Number.MAX_VALUE;
            if (j > 0) f[i][j] = Math.min(f[i][j], f[i - 1][j - 1] + nums[i][j]);
            if (j < i) f[i][j] = Math.min(f[i][j], f[i - 1][j] + nums[i][j]);
        }
    let ans = Number.MAX_VALUE;
    for (let i = 0; i < n; i++) ans = Math.min(ans, f[n - 1][i]);
    return ans;
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));


/**
 * DP
 * 1. 状态表示f[i][j]
 * (1) 集合：所有从起点走到第i行，第j个数的路径
 * (2) 所有路径上的数的和的最小值
 * 2. 状态计算
 * (1) 最后一步从左上下来 f[i][j] = f[i - 1][j - 1] + nums[i][j]  条件 j > 0 即不是第一个
 * (2) 最后一步从右上下来 f[i][j] = f[i - 1][j] + nums[i][j] 条件 j < i 即不是最后一个
 * 求最后一行所有数的最小值
 */