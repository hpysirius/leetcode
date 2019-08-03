/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length;
    while(left < right){
        let mid = (left + right) >> 1;
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target) {
            left = mid + 1;
        }else{
            right = mid
        }
    }
    return left;
};


console.log(searchInsert([1,3,5,6], 2));