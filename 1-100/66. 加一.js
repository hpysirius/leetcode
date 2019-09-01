/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (nums) {
    let carry = 0, ans = [];
    let l = n = nums.length;
    while (l-- > 0 || carry > 0) {
        let sum = carry;
        sum += (l === n - 1) ? nums[l] + 1 : (nums[l] || 0);
        ans.unshift(sum % 10);
        carry = Math.floor(sum / 10);
    }
    return ans;
};