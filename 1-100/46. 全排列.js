// 全排列两种方式
// 1. 枚举每个位置上放哪个数
// 2. 枚举每个数放到哪个位置


// 1. 枚举每个位置上放哪个数
const permute = nums => {
    const n = nums.length;
    const st = new Array(n).fill(false);
    const path = [], ans = [];
    const dfs = (nums, u) => {
        if (u === n) {
            ans.push([...path]);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (!st[i]) {
                st[i] = true;
                path.push(nums[i]);
                dfs(nums, u + 1);
                path.pop();
                st[i] = false;
            }
        }
    }
    dfs(nums, 0);
    return ans;
}



// 2. 枚举每个数放到哪个位置

console.log(permute([1, 2, 3]));

















// 插入法
// var permute = function (nums) {
//     const res = [];
//     if (nums.length === 1) {
//         return [nums];
//     } else {
//         let per = permute(nums.slice(1));
//         per.forEach(item => {
//             for (let j = 0; j < item.length + 1; j++) {
//                 let temp = item.slice(0, j).concat([nums[0]], item.slice(j));
//                 res.push(temp)
//             }
//         });
//         return [...new Set(res)];
//     }
// };

// permute([1]);
// 回溯法（深度优先遍历 + 状态重置）
// var permute = function (nums) {
//     let len = nums.length;
//     const res = [];
//     // nums.sort((a, b) => a - b);
//     const used = new Array(len).fill(false);

//     const findPer = (nums, depth, stack) => {
//         if(depth === nums.length){
//             res.push([...stack]);
//             return;
//         }
//         for(let i = 0; i < nums.length; i++){
//             if(!used[i]){
//                 // if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
//                 used[i] = true;
//                 stack.push(nums[i]);
//                 findPer(nums, depth + 1, stack);
//                 stack.pop();
//                 used[i] = false;
//             }
//         }
//     }
//     findPer(nums, 0, []);
//     return res;
// };



// console.log(permute([1, 2, 3]));

