/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const res = [];
  if (len < 4) return res;
  for (let i = 0; i < len - 3; i++) {
    // 防止重复
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    //  当数组最小值和都大于target 跳出
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    //  当数组最大值和都小于target,说明i这个数还是太小,遍历下一个
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;
    for (let j = i + 1; j < len - 2; j++) {
      let sum = 0;
      let begin = j + 1;
      let end = len - 1;
      // 防止重复
      if (j - i > 1 && nums[j] === nums[j - 1]) continue;
      while (begin < end) {
        sum = nums[i] + nums[j] + nums[begin] + nums[end];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[begin], nums[end]]);
          while (nums[begin] === nums[begin + 1]) begin++;
          while (nums[end] === nums[end - 1])end--;
          begin++;
          end--;
        } else if (sum < target) {
        //   while (nums[begin] === nums[begin + 1]) begin++;
          begin++;
        } else {
        //   while (nums[end] === nums[end - 1])end--;
          end--;
        }
      }
    }
  }
  return res;
};

console.log(fourSum([-1,0,1,2,-1,-4], -1));
