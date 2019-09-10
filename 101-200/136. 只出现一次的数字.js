/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let ans = 0;
    for (v of nums)
        ans ^= v;
    return ans;
};