/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let n = word1.length, m = word2.length;
    let f = new Array(n + 1);
    for (let i = 0; i <= n; i++) f[i] = new Array(m + 1);
    for (let i = 0; i <= n; i++) f[i][0] = i;
    for (let i = 0; i <= m; i++) f[0][i] = i;
    for (let i = 1; i <= n; i++)
        for (let j = 1; j <= m; j++) {
            f[i][j] = Math.min(f[i - 1][j], f[i][j - 1]) + 1;
            f[i][j] = Math.min(f[i][j], f[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1]));
        }
    return f[n][m];
};