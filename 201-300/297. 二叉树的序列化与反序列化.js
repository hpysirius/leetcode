/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var serialize = function (root) {
    let res = '';
    const dfs1 = (root) => {
        if (!root) {
            res += '#,';
            return;
        }
        res += root.val + ',';
        dfs1(root.left);
        dfs1(root.right);
    }
    dfs1(root);
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let u = 0;

    const dfs2 = (data) => {
        if (data[u] === '#') {
            u += 2;
            return null;
        }
        let t = 0;
        let is_minus = false;
        if (data[u] === '-') {
            is_minus = true;
            u++;
        }
        while (data[u] !== ',') {
            t = t * 10 + (data[u] - '0');
            u++;
        }
        u++;
        if (is_minus) t = -t;
        let root = new TreeNode(t);
        root.left = dfs2(data);
        root.right = dfs2(data);
        return root;
    }

    return dfs2(data, u);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let ts = {
    val: 1,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 2,
        left: {
            val: 8,
            left: null,
            right: null
        },
        right: {
            val: 10,
            left: null,
            right: null
        }
    }
}
// console.log(serialize(ts))
console.log(deserialize('1,9,#,#,2,8,#,#,10,#,#,'));