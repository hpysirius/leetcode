// 这道题用动态规划的思路并不难解决，比较难的是后文提出的用分治法求解，但由于其不是最优解法，所以先不列出来
// 动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans
// 如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
// 如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
// 每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果
// 时间复杂度：O(n)
// f[i] = Math.max(f[i - 1], 0) + nums[i]
var maxSubArray = nums => {
    let ans = Number.MIN_SAFE_INTEGER, last = 0;
    for(let i = 0; i < nums.length; i++){
        let now = Math.max(last, 0) + nums[i];
        ans = Math.max(ans, now);
        last = now;
    }
    return ans;
}

