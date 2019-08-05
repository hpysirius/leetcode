var romanToInt = function (s) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const reps = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const len = s.length;
    let prev = '';
    let res = 0;
    for (let i = 0; i < len; i++) {
        const index = reps.indexOf(s[i]);
        const nextIndex = reps.indexOf(s[i + 1]);
        if (values[index] >= values[nextIndex]) {
            res += values[index];
        } else {
            const conIndex = reps.indexOf(s.substr(i, 2));
            res += values[conIndex];
            i++;
        }
    }
    return res;
};
const res = romanToInt("MCMXCIV");
console.log(res);