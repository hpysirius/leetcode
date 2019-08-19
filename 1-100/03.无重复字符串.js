
var lengthOfLongestSubstring = function (s) {
    let obj = {}, res = 0;
    for (let i = 0, j = 0; i < s.length; i++) {
        typeof obj[s[i]] === 'undefined' ? obj[s[i]] = 1 : obj[s[i]]++;
        while (obj[s[i]] > 1) obj[s[j++]]--;
        res = Math.max(res, i - j + 1);
    }
    return res;
};
// 时间复杂度：从n2 变成 O(n)
// 内层循环红色指针j，红色指针不回头，内层循环最多执行O（n）
// 两重循环，取决于内层循环的执行效率
console.log(lengthOfLongestSubstring("abcabcbb"));

/**
        * @param {string} s
        * @return {number}
        */
// 思路分析：对字符串进行遍历，使用String.prototype.indexOf()实时获取遍历过程中的无重复子串并存放于str，
// 并保存当前状态最长无重复子串的长度为res，当遍历结束时，res的值即为无重复字符的最长子串的长度。
// var lengthOfLongestSubstring = function (s) {
//     let res = 0; // 用于存放当前最长无重复子串的长度
//     let str = '';// 用于存放无重复子串
//     let length = s.length;

//     for (let i = 0; i < length; i++) {
//         const val = s.charAt(i);
//         const index = str.indexOf(val);
//         if (index === -1) {
//             str += val;
//             res = res < str.length ? str.length : res;
//         } else {
//             str = str.substr(index + 1) + val;
//         }
//     }
//     return res;
// };
// const res = lengthOfLongestSubstring("pwwkew");
// console.log(res);