var searchRange = (nums, target) => {
    let i = 0;
    let j = nums.length - 1;
    let ret = [-1, -1];
    while (i < j) {
        var mid = Math.floor((i + j) / 2);
        nums[mid] < target ? i = mid + 1 : j = mid;
    }
    if(nums[i] !== target) return ret;
    ret[0] = i;
    j = nums.length - 1;
    while(i < j){
        mid = Math.ceil((i + j)/ 2);
        nums[mid] > target ? j = mid - 1 : i = mid;
    }
    ret[1] = j;
    return ret;
}

console.log(searchRange([5, 7, 7, 8, 9, 10], 8));