function search(nums, target) {
    let len = nums.length;
    if (len === 0) return -1;
    let left = 0, right = len - 1;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (nums[mid] > nums[right]) {
            // 前有序，包括中间数
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
    }
    if (nums[left] === target) {
        return left;
    }
    return -1;
}




// public class Solution2 {

//     // 中间元素和右边界比较

//     public int search(int[] nums, int target) {
//         int len = nums.length;
//         if (len == 0) {
//             return -1;
//         }

//         int left = 0;
//         int right = len - 1;
//         // 注意：这里是等于
//         while (left < right) {
//             int mid = (left + right) >>> 1;

//             if (nums[mid] > nums[right]) {
//                 // 前有序，包括中间数
//                 // 6 7 8 9 1 2
//                 if (nums[left] <= target && target <= nums[mid]) {
//                     right = mid;
//                 } else {
//                     left = mid + 1;
//                 }
//             } else {
//                 // 后有序，包括中间数
//                 // 6 7 1 2 3 4 5 6
//                 if (nums[mid] < target && target <= nums[right]) {
//                     left = mid + 1;
//                 } else {
//                     right = mid;
//                 }
//             }
//         }
//         if (nums[left] == target) {
//             return left;
//         }
//         return -1;
//     }
// }


console.log(search([3,1], 3))