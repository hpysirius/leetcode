// 位移
var subsets = function (nums) {
    let res = [];
    for (let i = 0; i < 1 << nums.length; i++) {
        let now = new Array();
        for (let j = 0; j < nums.length; j++)
            if (i >> j & 1)
                now.push(nums[j]);
        res.push(now);
    }
    return res;
}; 

// 递归
var subsets = function (nums) {
    let ans = [], path = [];
    let n = nums.length;
    dfs(nums, 0);
    return ans;

    function dfs(nums, u) {
        if (u === n) {
            ans.push([...path]);
            return;
        }
        let k = 0;
        k++;
        for (let i = 0; i <= k; i++) {
            dfs(nums, u + k);
            path.push(nums[u]);
        }
        for (let i = 0; i <= k; i++) path.pop();
    }
};

console.log(subsets([1, 2, 3]))