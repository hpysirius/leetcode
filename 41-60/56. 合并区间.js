var merge = function (intervals) {
    const res = [];
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 0;
    while (i < intervals.length) {
        let left = intervals[i][0];
        let right = intervals[i][1];
        while (i < intervals.length - 1 && intervals[i + 1][0] <= right) {
            i++;
            right = Math.max(right, intervals[i][1]);
        }
        res.push([left, right]);
        i++;
    }
    return res;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));