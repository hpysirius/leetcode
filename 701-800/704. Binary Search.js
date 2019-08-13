// 二分查找
// Given a sorted (in ascending order) integer array nums of n elements and a target value,
// write a function to search target in nums. If target exists, then return its index, otherwise
// return -1.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search1 = function (nums, target) {
    let len = nums.length;
    let l = 0, r = len - 1;
    // 使用模版1
    while (l < r) {
        let mid = l + r >> 1;
        nums[mid] < target ? l = mid + 1 : r = mid;
    }
    // otherwise return -1
    if (l === r && nums[l] !== target) return -1;
    return l;
};


const search2 = (nums, target) => {
    let len = nums.length;
    let l = 0, r = len - 1;
    // 使用模版2
    while (l < r) {
        let mid = l + r + 1 >> 1;
        nums[mid] > target ? r = mid - 1 : l = mid;
    }
    if(l === r && nums[l] !== target) return -1;
    return l;
}


console.log(search2([1, 2, 3, 4, 5, 6, 7], 2));