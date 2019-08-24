/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let ans = [], path = [];
    nums.sort((a, b) => a - b);
    dfs(nums, 0);
    return ans;
    
    function dfs(nums, u) {
        if(u === nums.length) {
            ans.push([...path]);
            return;
        }
        // 计算当前数字的个数
        let k = 0;
        while(u + k < nums.length && nums[u + k] === nums[u]) k++;
        for(let i = 0; i <= k; i++){
            dfs(nums, u + k);
            path.push(nums[u]);
        }
        // 恢复现场
        for(let i = 0; i <= k; i++) path.pop();
    }
};