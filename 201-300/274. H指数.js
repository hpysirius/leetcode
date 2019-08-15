/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let l = 0, r = n;
    while (l < r) {
        let mid = l + r + 1 >> 1;
        if (nums[n - mid] >= mid) l = mid;
        else r = mid - 1;
    }
    return l;
};