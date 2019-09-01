/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (nums) {
    let carry = 0, ans = [];
    let l = nums.length;
    let flag = true;
    while (l-- > 0 || carry > 0) {
        let sum = carry;
        if (l >= 0) {
            sum += flag ? nums[l] + 1 : nums[l];
        }
        ans.unshift(sum % 10);
        carry = Math.floor(sum / 10);
        flag = false;
    }
    return ans;
};