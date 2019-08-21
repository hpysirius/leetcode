/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s === '') return true;
    let reg = /[^A-Za-z0-9]/g// ^表示匹配除了中括号外的字符
    let str = s.replace(reg, '').toLowerCase();
    let i = 0, j = str.length - 1;
    let mid = j >> 1;
    while (i <= mid) if (str[i++] !== str[j--]) return false;
    return true;
};

console.log(isPalindrome('abb'));