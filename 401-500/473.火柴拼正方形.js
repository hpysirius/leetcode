/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
    let sum = 0;
    for(let v of nums)  sum += v;
    if(!sum || sum % 4) return false;
    
    // 剪枝
    nums.sort((a, b) => b - a);
    let st = new Array(nums.length).fill(false);
    
    return dfs(nums, 0, 0, sum / 4);
    
    function dfs(nums, u, cur, length){
        if(cur === length) u++, cur = 0;
        if(u === 4) return true;
        for(let i = 0; i < nums.length; i++){
           if(!st[i] && cur + nums[i] <= length) {
               st[i] = true;
               if(dfs(nums, u, cur + nums[i], length)) return true;
               st[i] = false;
               // 剪枝
               if(!cur) return false;
               if(cur + nums[i] ===length) return false;
               while(i + 1 < nums.length && nums[i + 1] === nums[i]) i++;
           }
        }
        return false;
    } 
    
};