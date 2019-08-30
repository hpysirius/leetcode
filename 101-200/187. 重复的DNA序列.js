/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    let ins = [], hash = {};
    for (let i = 0; i + 10 <= s.length; i++) {
        let t = s.substr(i, 10);
        if (!hash[t]) hash[t] = 1;
        else {
            hash[t]++;
            if (hash[t] === 2) ins.push(t);
        }
    }
    return ins;
};