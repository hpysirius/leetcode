const compareVersion = (s1, s2) => {
    let i = 0, j = 0;
    while (i < s1.length || j < s2.length) {
        let x = i, y = j;
        while (x < s1.length && s1[x] !== '.') x++;
        while (y < s2.length && s2[y] !== '.') y++;
        let a = i === x ? 0 : parseFloat(s1.substr(i, x - i));
        let b = j === y ? 0 : parseFloat(s2.substr(j, y - j));
        if(a > b) return 1;
        if(a < b) return -1;
        i = x + 1, j = y + 1;
    }
    return 0;
}

console.log(compareVersion('01', '1'));