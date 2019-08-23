/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [];
    for (let i = 0; i < 1 << nums.length; i++) {
        let now = new Array();
        for (let j = 0; j < nums.length; j++)
            if (i >> j & 1)
                now.push(nums[j]);
        res.push([...now]);
    }
    return res;
}; 

console.log(subsets([1,2,3]));