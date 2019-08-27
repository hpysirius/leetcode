/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let hash = {};
    for (let v of t) hash[v] ? hash[v]++ : hash[v] = 1;
    let cnt = Object.keys(hash).length;
    let res = '';

    for (let i = 0, j = 0, c = 0; i < s.length; i++) {
        if (hash[s[i]] === 1) c++;
        hash[s[i]] ? hash[s[i]]-- : hash[s[i]] = -1;
        while (hash[s[j]] < 0) hash[s[j++]]++;
        if (c === cnt) {
            if (res.length === 0 || res.length > i - j + 1) res = s.substr(j, i - j + 1);
        }
    }
    return res;
};


console.log(minWindow("ADOBECODEBANC", "ABC"))