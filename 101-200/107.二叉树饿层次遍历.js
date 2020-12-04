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
var levelOrderBottom = function(root) {
    if(root === null) return [];
    const ans = [];
    const dfs = (node, path) => {
        if(node === null) return;

        if(ans[path]) {
            ans[path].push(node.val)
        }else {
            ans[path] = [node.val];
        }
        dfs(node.left, path + 1);
        dfs(node.right, path + 1);
    }
    dfs(root, 0);
    return ans.reverse();
};