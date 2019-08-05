// 插入法
var permute = function (nums) {
    const res = [];
    if (nums.length === 1) {
        return [nums];
    } else {
        let per = permute(nums.slice(1));
        per.forEach(item => {
            for (let j = 0; j < item.length + 1; j++) {
                let temp = item.slice(0, j).concat([nums[0]], item.slice(j));
                res.push(temp)
            }
        });
        return [...new Set(res)];
    }
};
// 回溯法（深度优先遍历 + 状态重置）
var permute = function (nums) {
    let len = nums.length;
    const res = [];
    // nums.sort((a, b) => a - b);
    const used = new Array(len).fill(false);

    const findPer = (nums, depth, stack) => {
        if(depth === nums.length){
            res.push([...stack]);
            return;
        }
        for(let i = 0; i < nums.length; i++){
            if(!used[i]){
                // if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
                used[i] = true;
                stack.push(nums[i]);
                findPer(nums, depth + 1, stack);
                stack.pop();
                used[i] = false;
            }
        }
    }
    findPer(nums, 0, []);
    return res;
};



console.log(permute([1, 2, 3]));

