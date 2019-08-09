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
// 递归
var isSymmetric = function(root) {
    if(!root) return true;
    const dfs = (p, q) => {
        if(!p || !q) return !p && !q;
        return (p.val === q.val) && dfs(p.left, q.right) && dfs(p.right, q.left);
    }
    return dfs(root.left, root.right);
};
// 迭代
// 左边：左中右遍历
// 右边：右中左遍历
// const isSymmetric = root => {

// }