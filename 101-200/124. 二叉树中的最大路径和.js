/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let ans = Number.MIN_SAFE_INTEGER;
    // 从root向下走的最大值
    const dfs = root => {
        if (!root) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);
        ans = Math.max(ans, left + right + root.val);
        return Math.max(0, root.val + Math.max(left, right));
    }
    dfs(root);
    return ans;
};