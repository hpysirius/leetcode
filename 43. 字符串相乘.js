let multiply = function (num1, num2) {
    let m = num1.length;
    let n = num2.length;
    let arr = new Array(m + n).fill(0);
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let mul = +num1[i] * +num2[j];
            let sum = mul + arr[i + j + 1];
            arr[i + j] += Math.floor(sum / 10);
            arr[i + j + 1] = sum % 10;
        }
    }
    let str = arr.reduce((a, b) => {
        if (a === '' && b === 0) return a;
        return a + b;
    }, '');

    return str ? str : '0';
};

console.log(multiply('123', '456'));