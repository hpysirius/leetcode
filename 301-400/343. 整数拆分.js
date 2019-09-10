/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    let f = new Array(n + 1).fill(0);
    f[2] = 1;
    for (let i = 3; i <= n; i++)
        for (let j = 1; j < i; j++) {
            f[i] = Math.max(f[i], Math.max(j * f[i - j], j * (i - j)))
        }
    return f[n];
};

console.log(integerBreak(3))