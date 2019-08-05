const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let sum = 0;
    let begin = i + 1;
    let end = len - 1;
    while (begin < end) {
      sum = nums[i] + nums[begin] + nums[end];
      if (sum === 0) {
        res.push([nums[i], nums[begin], nums[end]]);
        while (nums[begin] === nums[begin + 1]) begin++;
        while (nums[end] === nums[end - 1]) end--;
        begin++;
        end--;
      } else if (sum < 0) {
        while (nums[begin] === nums[begin + 1]) begin++;
        begin++;
      } else {
        while (nums[end] === nums[end - 1]) end--;
        end--;
      }
    }
  }
  return res;
};

const res = threeSum([1, -1, -1, 0]);
console.log(res);
