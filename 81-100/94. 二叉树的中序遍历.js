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
/**
 * 前序遍历：根结点 ---> 左子树 ---> 右子树
 * 中序遍历：左子树---> 根结点 ---> 右子树
 * 后序遍历：左子树 ---> 右子树 ---> 根结点
 *  
 * */

var inorderTraversal = function(root) {
    const res = [];
    const stack = [];
    let p = root;
    while(p || stack.length){
        while(p){
            stack.push(p);
            p = p.left;
        }
        const tmp = stack.pop();
        res.push(tmp.val);
        if(tmp && tmp.right){
            p = tmp.right;
        }
    }
    return res;
};

// 将整颗树的最左边一条链压入栈中，每次取出栈顶元素，
// 如果它有右子树，则将右子树压入栈中