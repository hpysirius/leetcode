/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let ans = [], path = [];
    let n = nums.length;
    nums.sort((a, b) => a - b);
    dfs(nums, 0);
    return ans;

    function dfs(nums, u) {
        if (u === n) {
            ans.push([...path]);
            return;
        }
        let k = 0;
        while (u + k < n && nums[u + k] === nums[u]) k++;
        for (let i = 0; i <= k; i++) {
            dfs(nums, u + k);
            path.push(nums[u]);
        }
        for (let i = 0; i <= k; i++) path.pop();
};


subsetsWithDup([4,4,4,1,4]);