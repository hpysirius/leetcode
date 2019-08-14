const search = (nums, target) => {
    if (nums.length === 0) return -1;
    // 找到最小值
    let end = nums.length - 1;
    let l = 0, r = end;
    while (l < r) {
        let mid = l + r >> 1;
        if (nums[mid] <= nums[r]) r = mid
        else l = mid + 1;
    }
    if (target <= nums[end]) r = end;
    else l = 0, r--;
    while (l < r) {
        let mid = l + r >> 1;
        if (nums[mid] >= target) r = mid;
        else l = mid + 1;
    }
    if (nums[l] === target) return l;
    return -1;
}