// https://leetcode-cn.com/problems/palindrome-partitioning/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const ans = [];
    const len = s.length;
    const path = [];

    // 判断是否是回文
    const isPalindrome = (left, right, str) => {
        while(left < right){
            if(s.charAt(left) !== s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    /**
     * 
     * @param {*} start 开始位置
     * @param {*} len  长度
     * @param {*} path 路径
     * @param {*} ans 答案
     */
    const dfs = (start, len, path, ans) => {
        if(start === len) {
            ans.push([...path]);
            return;
        }

        for(let i = start; i < len; i++) {
            if(!isPalindrome(start, i, s)) {
                continue;
            }

            path.push(s.substring(start, i + 1)); // 记录路径
            dfs(i + 1, len, path, ans); // 递归
            path.pop(); // 回溯
        }

    }
    dfs(0, len, path, ans);
    return ans;
};