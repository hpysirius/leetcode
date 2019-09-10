/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let ones = 0, twos = 0;
    for (v of nums) {
        ones = ones ^ v & ~twos;
        twos = twos ^ v & ~ones;
    }
    return ones;
};