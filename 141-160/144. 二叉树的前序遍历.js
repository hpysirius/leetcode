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
// 迭代
var preorderTraversal = function (root) {
    const res = [];
    const stack = [];
    let p = root;
    while (p || stack.length) {
        while (p) {
            res.push(p.val);
            stack.push(p);
            p = p.left;
        }
        p = stack.pop().right;
    }
    return res;
};

// 递归
const preorderTraversal = root => {
    const res = [];
    const helper = root => {
        if(root !== null){
            res.push(root.val);
            helper(root.left);
            helper(root.right);
        }
    }
    helper(root);
    return res;
}