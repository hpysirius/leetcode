const jump = nums => {
    let end = 0;
    let maxPos = 0;
    let steps = 0;
    let len = nums.length - 1;
    for (let i = 0; i < len; i++) {
        maxPos = Math.max(maxPos, nums[i] + i);
        if (i === end) {
            end = maxPos;
            steps++;
        }
    }
    return steps;
}

console.log(jump([2, 3, 1, 1, 4]));