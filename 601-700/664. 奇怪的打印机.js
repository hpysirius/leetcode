/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
    let n = s.length;
    if (!n) return 0;
    let f = new Array(n + 1);
    for (let i = 0; i < n + 1; i++) f[i] = new Array(n + 1).fill(0);
    for (let len = 1; len <= n; len++)
        for (let l = 0; l + len - 1 < n; l++) {
            let r = l + len - 1;
            f[l][r] = f[l + 1][r] + 1;
            for (let k = l + 1; k <= r; k++)
                if (s[k] === s[l])
                    f[l][r] = Math.min(f[l][r], f[l][k - 1] + f[k + 1][r]);
        }
    return f[0][n - 1];
};