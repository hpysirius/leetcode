/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let len = nums.length;
    if(!len) return [-1, -1];
    let l = 0, r = len - 1;
    let res = [];
    while(l < r){
        let mid = l + r >> 1;
        if(nums[mid] >= target) r = mid
        else l = mid + 1;
    }
    if(nums[l] !== target) return [-1 , -1];
    res[0] = l;
    // 重置数据
    l = 0, r = len - 1;
    while(l < r){
        let mid = l + r + 1 >> 1;
        if(nums[mid] <= target ) l = mid;  
        else r = mid - 1;
    }
    res[1] = l;
    return res;
};

console.log(searchRange([5, 7, 7, 8, 9, 10], 8));