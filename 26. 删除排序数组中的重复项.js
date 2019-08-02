var removeDuplicates = function (nums) {
    let len = nums.length;
    if(len === 0) return false;
    let k = 1;
    let p = nums[0];
    for(let i = 0; i < len; i++){
        if(nums[i] !== p){
            nums[k] = nums[i];
            p = nums[i];
            k++;
        }
    }
    return k;
}