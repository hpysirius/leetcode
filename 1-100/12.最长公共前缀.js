// 执行成功，代码太丑了。
var longestCommonPrefix = function (strs) {
    const len = strs.length;
    let commonStr = '';
    if (len === 1) {
        commonStr = strs.shift();
    }
    if (len > 1) {
        const first = strs.shift();
        const fl = first.length;
        for (let i = 0; i < fl && commonStr.length === i; i++) {
            const char = first[i];
            let isCommon = [];
            strs.forEach(item => {
                if (item[i] === char) {
                    isCommon.push(true);
                } else {
                    return;
                }
            });
            if (isCommon.length === strs.length) {
                commonStr += char;
            }
        }
    }
    return commonStr;
};
const res = longestCommonPrefix(["flower", "flow", "flight"])
console.log(res);