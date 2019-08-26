/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let ans = 0;
    let col = new Array(n).fill(false); // 每一列只能有一个皇后
    let d = new Array(n * 2).fill(false); // d(2n - 1)
    let ud = new Array(n * 2).fill(false);
    dfs(0);

    return ans;

    function dfs(u) {
        if (u === n) {
            ans++;
            return;
        }
        for (let i = 0; i < n; i++) {
            if (!col[i] && !d[u + i] && !ud[u - i + n]) {
                col[i] = d[u + i] = ud[u - i + n] = true;
                dfs(u + 1);
                col[i] = d[u + i] = ud[u - i + n] = false;
            }
        }
    }

};

console.log(totalNQueens(4))