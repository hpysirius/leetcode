/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (m, coins) {
    let f = new Array(m + 1).fill(0);
    f[0] = 1;
    for (let c of coins)
        for (let j = c; j <= m; j++)
            f[j] += f[j - c];
    return f[m];
};