/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    const dfs = (root, minV, maxV) => {
        if (root === null) return true;
        if (root.val < minV || root.val > maxV) return false;
        return dfs(root.left, minV, root.val - 1) && dfs(root.right, root.val + 1, maxV);
    }
    return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_VALUE);
};

// 注意 0 < Number.MIN_VALUE  true