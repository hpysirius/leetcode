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
var diameterOfBinaryTree = function(root) {
    let ans = 0;
    
    const dfs = root => {
        if(!root) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);
        ans = Math.max(ans, left + right);
        return Math.max(left + 1, right + 1);
    }
    
    dfs(root);
    return ans;
};
