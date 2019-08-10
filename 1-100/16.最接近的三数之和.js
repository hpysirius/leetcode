// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
// 找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
// 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

// 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let res = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < len - 2; i++) {
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const temp = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - temp) < Math.abs(target - res)) {
        res = temp;
      }
      if (temp === target) {
        return temp;
      }
      if (temp < target) {
        left += 1;
      }
      if (temp > target) {
        right -= 1;
      }
    }
  }
  return res;
};
