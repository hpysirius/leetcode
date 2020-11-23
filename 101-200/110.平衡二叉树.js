/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    // 计算tree的高度
    const height = (root) => {
        if(root === null) {
            return 0;
        }
        return Math.max(height(root.left), height(root.right)) + 1;
    }

    if(root === null) {
        return true;
    }else {
        return Math.abs(height(root.left) - height(root.right)) <= 1 
         && isBalanced(root.left)
         && isBalanced(root.right);
    }
};