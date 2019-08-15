var hIndex = function (nums) {
    let len = nums.length;
    let l = 0, r = len;
    while (l < r) {
        let mid = l + r + 1 >> 1;
        if (nums[len - mid] >= mid) l = mid;
        else r = mid - 1;
    }
    return l;
};
console.log(hIndex([0]));