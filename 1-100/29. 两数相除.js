/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// var divide = function (m, n) {
//     if (n == 0)
//         return 0;

//     let sig = void 0;
//     if (m * n > 0) sig = true;
//     else sig = false;

//     let dividend = Math.abs(m);
//     let divisor = Math.abs(n);

//     let res = 0;
//     if (n === 1 || n === -1) res = m;
//     else {
//         while (divisor <= dividend) {
//             let t = divisor, count = 1;
//             while (t <= dividend) {
//                 dividend -= t;
//                 res += count;
//                 count = count << 1;
//                 t = t << 1;
//             }
//         }
//     }
//     let res_value = sig ? res : -res;
//     return Math.max(Math.min(res_value, Math.pow(2, 31) - 1), Math.pow(-2, 31));
// };

// console.log(divide(-1, 1));
// console.log(divide(100, 2));
// leetcode 不过，超过时间限制





const divide = (dividend, divisor) => {
    const MAX_VALUE = Math.pow(2, 31) - 1;
    const MIN_VALUE = Math.pow(-2, 31);
    if (divisor == 0)
        return -1;
    if (dividend == 0)
        return 0;
    /** -2147483648, -1 这个测试样例的确没想到，结果翻车了*/
    if (dividend == MIN_VALUE && divisor == -1)
        return MAX_VALUE;
    /** 符号位的处理参考了大佬的异或处理方法*/
    let negetive = (dividend ^ divisor) < 0;
    /** div_count 是当前divisor_tmp相对于divisor的倍数 */
    let res = 0, div_count = 1;
    let dividend_tmp = Math.abs(dividend);
    let divisor_tmp = Math.abs(divisor);

    /** 按标准的二分查找代码模板写的 */
    while (dividend_tmp >= divisor_tmp) {
        dividend_tmp -= divisor_tmp;
        res += div_count;

        if (dividend_tmp < Math.abs(divisor))
            break;

        /** divisor_tmp无法倍增时，就将其初始化为divisor绝对值，重新开始下一轮倍增*/
        if (dividend_tmp - divisor_tmp < divisor_tmp) {
            divisor_tmp = Math.abs(divisor);
            div_count = 1;
            continue;
        }

        /** 不断倍增divisor_tmp直到和dividend_tmp一样大*/
        divisor_tmp += divisor_tmp;
        div_count += div_count;
    }
    return negetive ? 0 - res : res;
}