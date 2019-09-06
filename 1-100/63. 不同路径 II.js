/**
 * 
 * @param {*} nums 
 * dp[i][j] 动态规划
 */


const uniquePathsWithObstacles = nums => {
    let n = nums.length, m = nums[0].length;
    let f = new Array(n);
    for (let i = 0; i < n; i++) f[i] = new Array(m).fill(0);
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++) {
            if (nums[i][j]) continue;
            if (!i && !j) f[i][j] = 1;
            if (i > 0) f[i][j] += f[i - 1][j];
            if (j > 0) f[i][j] += f[i][j - 1];
        }
    return f[n - 1][m - 1];
}