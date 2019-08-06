/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */


// var getPermutation = function (n, k) {
//     var permute = function (nums) {
//         const res = [];
//         if (nums.length === 1) {
//             return [nums];
//         } else {
//             let per = permute(nums.slice(1));
//             per.forEach(item => {
//                 for (let j = 0; j < item.length + 1; j++) {
//                     let temp = item.slice(0, j) + nums[0] +  item.slice(j);
//                     res.push(temp)
//                 }
//             });
//             return [...new Set(res)].sort((a, b) => a - b);
//         }
//     };
//     const arr = new Array(n).fill(0).map((it, index) => index + 1);
//     const r = arr.length === 1 ? arr : permute(arr);
    
//     return r[k - 1].toString();
// };

console.log(getPermutation(9, 2678));