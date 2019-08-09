/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var postorderTraversal = function (root) {
    const res = [];
    const helper = root => {
        if (root !== null) {
            helper(root.left);
            helper(root.right);
            res.push(root.val);
        }
    }
    helper(root);
    return res;
};

