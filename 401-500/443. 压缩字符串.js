/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (s) {
    let m = s.length, ans = '';
    for (let i = 0; i < m; i++) {
        let k = i;
        while (s[k] === s[k + 1]) k++;
        let sum = k - i + 1;
        ans += s[i] + (sum > 1 ? sum : '');
        i = k;
    }
    for (let i = 0; i < ans.length; i++) {
        s[i] = ans[i];
    }
    return ans.length;
};