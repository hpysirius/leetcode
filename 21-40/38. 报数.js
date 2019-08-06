/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let s = '1';
    for (let i = 0; i < n - 1; i++) {
        let ns = '';
        for (let j = 0; j < s.length; j++) {
            let k = j;
            while (k < s.length && s[k] === s[j]) k++;
            ns += (k - j).toString() + s[j];
            j = k - 1;
        }
        s = ns;
    }
    return s;
};

countAndSay(6);