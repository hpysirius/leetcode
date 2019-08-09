/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */


var buildTree = function (preorder, inorder) {
    let n = preorder.length;
    let pos = {};
    for (let i = 0; i < n; i++) {
        pos[inorder[i]] = i;
    }
    const dfs = (preorder, inorder, pl, pr, il, ir) => {
        if (pl > pr) return null;
        let val = preorder[pl];
        let k = pos[val];
        let len = k - il;
        let root = new TreeNode(val);
        root.left = dfs(preorder, inorder, pl + 1, pl + len, il, k - 1);
        root.right = dfs(preorder, inorder, pl + len + 1, pr, k + 1, ir);
        return root;
    }
    return dfs(preorder, inorder, 0, n - 1, 0, n - 1);
};