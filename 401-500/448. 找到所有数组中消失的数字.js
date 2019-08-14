/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let l = nums.length;
    const arr = new Array(l);
    for (let i = 0; i < l; i++) {
        arr[nums[i] - 1] = nums[i];
    }
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) res.push(i + 1);
    }
    return res;
};