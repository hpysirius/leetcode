/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxJump = 0;
    let len = nums.length - 1;
    for (let i = 0; i < len; i++) {
        maxJump = Math.max(nums[i], maxJump - 1);
        if (i === len && maxJump === 0) {
            return true;
        }
        if (maxJump <= 0) {
            return false;
        }
    }
    return true;
};