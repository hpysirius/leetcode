// 枚举每个数放到哪个位置
const permuteUnique = nums => {
    let n = nums.length;
    let ans = [], path = new Array(n);
    let st = new Array(n).fill(false);
    nums.sort((a, b) => a - b);

    const dfs = (nums, u, start) => {
        if (u === n) {
            ans.push([...path]);
            return;
        }
        for (let i = start; i < n; i++)
            if (!st[i]) {
                st[i] = true;
                path[i] = nums[u];
                dfs(nums, u + 1, u + 1 < n && nums[u + 1] === nums[u] ? i + 1 : 0);
                st[i] = false;
            }
    }
    dfs(nums, 0, 0);
    return ans;
}
console.log(permuteUnique([1, 1, 2]));



// var permuteUnique = function (nums) {
//     let len = nums.length;
//     const res = [];
//     nums.sort((a, b) => a - b);
//     const used = new Array(len).fill(false);

//     const findPermuteUnique = (nums, depth, stack) => {
//         if(depth === nums.length){
//             res.push([...stack]);
//             return;
//         }
//         for(let i = 0; i < nums.length; i++){
//             if(!used[i]){
//                 if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
//                 used[i] = true;
//                 stack.push(nums[i]);
//                 findPermuteUnique(nums, depth + 1, stack);
//                 stack.pop();
//                 used[i] = false;
//             }
//         }
//     }
//     findPermuteUnique(nums, 0, []);
//     return res;
// };


// console.log(permuteUnique([1, 2, 3]));

