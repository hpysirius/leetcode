// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let l = 0, r = x;
    while (l < r) {
        let mid = l + r + 1 >> 1;
        if (mid <= x / mid) l = mid
        else r = mid - 1;
    }
    return l;
};