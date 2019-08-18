/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.trim();
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            str += s[i];
        } else {
            let k = i;
            while (s[k] === ' ' && k < s.length) k++;
            str += ' ';
            i += k - i - 1;
        }
    }
    let arr = str.split(' ').reverse().join(' ');
    return arr;
};

const res = reverseWords("a good   example");
console.log(res);