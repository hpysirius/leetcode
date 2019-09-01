var addBinary = function (a, b) {
    let carry = 0, ans = [];
    let m = a.length, n = b.length;
    while (m > n) {
        b = '0' + b;
        n++;
    }
    while (m < n) {
        a = '0' + a;
        m++;
    }
    while (m-- > 0 || carry > 0) {
        let sum = carry;
        if (m >= 0) {
            sum += +a[m];
            sum += +b[m];
        }
        ans.unshift(sum % 2);
        carry = sum >> 1;
    }
    return ans.join('');
};

console.log(addBinary('11', '1'))
