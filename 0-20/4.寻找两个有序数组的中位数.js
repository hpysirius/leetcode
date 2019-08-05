// 合并数组
var findMedianSortedArrays = function (nums1, nums2) {
    const numMerge = [...nums1, ...nums2];
    const num = numMerge.sort((a, b) => a - b);
    const length = num.length;
    const m = parseInt(length / 2);
    if (length % 2 === 0) {
        return (num[m] + num[m - 1]) / 2;
    } else {
        return num[m];
    }
};