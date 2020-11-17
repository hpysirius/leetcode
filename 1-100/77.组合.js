// https://leetcode-cn.com/problems/combinations/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const ans = [];
    const tmp = [];
    const dfs = (cur, n, k) => {
        // 
        if (tmp.length + (n - cur + 1) < k) {
            return;
        }
        if(tmp.length === k) {
            ans.push([...tmp]);
            return;
        }
        tmp.push(cur);
        // 递归
        dfs(cur + 1, n, k);
        tmp.pop(); // 回溯 
        dfs(cur + 1, n, k);
    }
    dfs(1, n, k)
    return ans;
};