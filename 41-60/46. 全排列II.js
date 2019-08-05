var permuteUnique = function (nums) {
    let len = nums.length;
    const res = [];
    nums.sort((a, b) => a - b);
    const used = new Array(len).fill(false);

    const findPermuteUnique = (nums, depth, stack) => {
        if(depth === nums.length){
            res.push([...stack]);
            return;
        }
        for(let i = 0; i < nums.length; i++){
            if(!used[i]){
                if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
                used[i] = true;
                stack.push(nums[i]);
                findPermuteUnique(nums, depth + 1, stack);
                stack.pop();
                used[i] = false;
            }
        }
    }
    findPermuteUnique(nums, 0, []);
    return res;
};


console.log(permuteUnique([1, 2, 3]));

