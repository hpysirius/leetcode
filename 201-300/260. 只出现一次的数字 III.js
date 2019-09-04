/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let ans = [], hash = {};
    for (let i = 0, n = nums.length; i < n; i++) {
        if (!hash[nums[i]])
            hash[nums[i]] = 1;
        else
            hash[nums[i]]++;
    }
    for (let key of Object.keys(hash))
        if (hash[key] === 1) ans.push(key);
    return ans;
};