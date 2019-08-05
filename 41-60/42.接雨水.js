var trap = function (height) {
    let n = height.length;
    let left = new Array(n).fill(0), right = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i - 1], height[i - 1]);
    }
    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i + 1]);
    }
    let water = 0;
    for (let i = 1; i < n - 1; i++) {
        let level = Math.min(left[i], right[i]);
        water += Math.max(0, level - height[i]);
    }
    return water;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));