/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let l = 0, r = nums.length - 1;
    if(nums.length === 0 || nums[r] < target ) return nums.length;
    while(l < r){
        let mid = l + r >> 1;
        if(nums[mid] >= target) r = mid;
        else l = mid + 1;
    }
    return l;
}

console.log(searchInsert([1,3,5,6], 2));