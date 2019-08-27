/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
        let obj = {}, ans = 0;
        for (let i = 0, j = 0; i < s.length; i++) {
                !obj[s[i]] ? obj[s[i]] = 1 : obj[s[i]]++;
                while (obj[s[i]] > 1) obj[s[j++]]--;
                ans = Math.max(ans, i - j + 1);
        }
        return ans;
};
// 时间复杂度：从n2 变成 O(n)
// 内层循环红色指针j，红色指针不回头，内层循环最多执行O（n）
// 两重循环，取决于内层循环的执行效率
console.log(lengthOfLongestSubstring("abcabcbb"));

