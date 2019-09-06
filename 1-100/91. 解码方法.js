/**
 * @param {string} s
 * @return {number}
 * DP
 * f[i] = f[i - 1] + f[i - 2];
 * 判断f[i - 2] 是否存在
 */
var numDecodings = function (s) {
    let n = s.length;
    let f = new Array(n + 1).fill(0);
    f[0] = 1;
    for (let i = 1; i <= n; i++) {
        if (s[i - 1] !== '0') f[i] += f[i - 1];
        if (i >= 2) {
            let t = +s[i - 2] * 10 + +s[i - 1];
            if (t >= 10 && t <= 26) f[i] += f[i - 2];
        }
    }
    return f[n];
};

numDecodings('12');