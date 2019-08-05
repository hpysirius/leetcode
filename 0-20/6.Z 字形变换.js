/**
         * @param {string} s
         * @param {number} numRows
         * @return {string}
         */
var convert = function (s, numRows) {
    let n = s.length;
    if (numRows === 1) return s;
    let ret = '';
    let cycleLen = 2 * numRows - 2;
    for (let i = 0; i < numRows; i++) {
        for (j = 0; i + j < n; j += cycleLen) {
            ret += s[i + j];
            // i 排除第一行和最后一行
            if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
                ret += s[j + cycleLen - i];
            }
        }
    }
    return ret;
};
const res = convert('LEETCODEISHIRING', 4);
console.log(res);