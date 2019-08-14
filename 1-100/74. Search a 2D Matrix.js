// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Example 1:
// Input:
var matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
var target = 3
// Output: true

// Example 2:

// Input:
// var matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
// ]
// var target = 13
// Output: false


// 正确的写法
const searchMatrix = (matrix, target) => {
    if (matrix.length === 0 || matrix[0].length === 0) return false;
    let n = matrix.length, m = matrix[0].length;
    let l = 0, r = m * n - 1;
    while (l < r) {
        let mid = l + r >> 1;
        if (matrix[Math.floor(mid / m)][mid % m] >= target) r = mid;
        else l = mid + 1;
    }
    if(matrix[Math.floor(l / m)][l % m] !== target) return false;
    return true;
}

console.log(searchMatrix(matrix, target))










// 瞎写的，没意义，但是通过了leetcode，
// 执行用时 : 68 ms , 在所有 JavaScript 提交中击败了 99.39% 的用户
// const searchMatrix = (matrix, target) => !!([].concat(...matrix).indexOf(target) !== -1);


