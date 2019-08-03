// 基于异或运算
const swap = (nums, i, j) => {
    nums[i] = nums[i] ^ nums[j];
    nums[j] = nums[i] ^ nums[j];
    nums[i] = nums[i] ^ nums[j];
}

const firstMissingPositive = nums => {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        while (nums[i] > 0 && i < len && nums[nums[i] - 1] !== nums[i]) {
            swap(nums, nums[i] - 1, i);
        }
    }
    for(let i = 0; i < len; i++){
        if(nums[i] !== i + 1) return i + 1;
    }
    return len + 1;
}


// console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7,8,9,11,12]));