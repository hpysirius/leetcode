/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = [];
    if (!root) return res;
    let q = [];
    q.push(root);
    while (q.length) {
        let len = q.length;
        let level = [];
        for (let i = 0; i < len; i++) {
            let t = q.shift();
            level.push(t.val);
            if (t.left) q.push(t.left);
            if (t.right) q.push(t.right);
        }
        res.push(level);
    }
    return res;
};