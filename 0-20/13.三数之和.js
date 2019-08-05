
const threeSum = function (nums) {
  const res = [];

  const len = nums.length;
  let hash = {};
  for(let i = 0; i < len - 2; i++){
      for(let j = i + 1; j < len - 1; j++){
          if(hash[nums[j]] !== undefined){
              res.push([nums[j]].concat(hash[nums[j]]));
              hash[nums[j]] = undefined;
          }else{
              let mark = 0 - nums[i] - nums[j];
              hash[mark] = [nums[i], nums[j]];
          }
      }
  }
  return res;
};
const res = threeSum([-1, 0, 1, 0]);
console.log(res);
