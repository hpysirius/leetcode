/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let n = nums.length;
  let ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    let m = i + 1;
    let j = n - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (m < j) {
      let sum = nums[i] + nums[m] + nums[j];
      if (sum === 0) {
        ans.push([nums[i], nums[m], nums[j]]);
        while (nums[j] === nums[j - 1]) j--;
        j--;
        while (nums[m] === nums[m + 1]) m++;
        m++;
      } else if (sum > 0) {
        while (nums[j] === nums[j - 1]) j--;
        j--;
      } else {
        while (nums[m] === nums[m + 1]) m++;
        m++;
      }
    }
  }
  return ans;
};

console.log(threeSum([0, 0, 0]))
