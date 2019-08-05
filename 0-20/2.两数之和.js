function twoSum(nums, target) {
    const sortArr = nums.sort((a, b) => a - b);
    const middleIndex = nums.findIndex(item => item > target);
    sortArr.length = middleIndex;
    let res = [];
    for (var i = 0; i < nums.length; i++) {
        const other = target - nums[i];
        const otherIndex = nums.findIndex(item => item === other);
        if (otherIndex !== -1) {
            res = [i, otherIndex];
            break;
        }
    }
    return res;
}
const res = twoSum([1, 2, 4, 7, 14, 15], 9);
console.log(res);