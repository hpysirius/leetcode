/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
// 中序遍历： 左、中、右
let stk = [];
var BSTIterator = function (root) {
    while (root) {
        stk.push(root);
        root = root.left;
    }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    let p = stk.pop();
    let res = p.val;
    p = p.right;
    while (p) {
        stk.push(p);
        p = p.left;
    }
    return res;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return stk.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */