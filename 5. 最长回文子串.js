function longestPalindrome(s) {
    let str = s.split('').reduce((prev, item) => prev + item + '#', '#');
    let id = 0, mx = 0, p = [];
    let newLen = str.length;
    // p = [x,x] 存的index的回文半径
    for (let i = 0; i < newLen; i++) {
        p[i] = mx > i ? Math.min(p[2 * id - i], mx - i) : 1;
        while (str[i + p[i]] === str[i - p[i]] && i - p[i] >= 0 && i + p[i] < newLen) {
            p[i]++
        }
        if (p[i] + i > mx) {
            id = i;
            mx = i + p[i];
        }
    }
    const c_index = p.findIndex(it => Math.max(...p) === it);
    const s_str = str.slice(c_index - (p[c_index] - 1), c_index + p[c_index]);
    return s_str.replace(/\#/g, '');
}

console.log(longestPalindrome("dbbbd"));
// 踩坑1: size在leetcode中是个关键字
