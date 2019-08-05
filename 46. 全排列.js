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


console.log(permute([1, 2, 3]));

