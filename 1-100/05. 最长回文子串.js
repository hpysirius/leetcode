var longestPalindrome = function (s) {
    let ans = '', n = s.length;
    for (let i = 0; i < n; i++) {
        for (let j = i, k = i; j >= 0 && k < n && s[j] === s[k]; j-- , k++)
            if (ans.length < k - j + 1) ans = s.substr(j, k - j + 1);
        for (let j = i, k = i + 1; j >= 0 && k < n && s[j] === s[k]; j-- , k++)
            if (ans.length < k - j + 1) ans = s.substr(j, k - j + 1);
    }
    return ans;
};

console.log(longestPalindrome("dbbbd"));
// 踩坑1: size在leetcode中是个关键字


// 马拉车太局限，只能适用于最长回文字串
// function longestPalindrome(s) {
//     let str = s.split('').reduce((prev, item) => prev + item + '#', '#');
//     let id = 0, mx = 0, p = [];
//     let newLen = str.length;
//     // p = [x,x] 存的index的回文半径,mx 是上一个元素+回文半径
//     for (let i = 0; i < newLen; i++) {
//         p[i] = mx > i ? Math.min(p[2 * id - i], mx - i) : 1;
//         while (str[i + p[i]] === str[i - p[i]] && i - p[i] >= 0 && i + p[i] < newLen) {
//             p[i]++
//         }
//         if (p[i] + i > mx) {
//             id = i;
//             mx = i + p[i];
//         }
//     }
//     const c_index = p.findIndex(it => Math.max(...p) === it);
//     const s_str = str.slice(c_index - (p[c_index] - 1), c_index + p[c_index]);
//     return s_str.replace(/\#/g, '');
// }