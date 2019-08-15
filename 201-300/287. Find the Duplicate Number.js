const findDuplicate = nums => {
    let n = nums.length - 1;
    let l = 1, r = n;
    while (l < r) {
        let mid = l + r >> 1;
        let cnt = 0;
        // 每次搜索这个区间内，满足条件的苹果有多少个
        for (x of nums) if (x >= l && x <= mid) cnt++;
        // cnt 苹果  mid - l + 1  篮子
        // 如果苹果>篮子，重复的一个苹果必在这个区间内
        if (cnt > mid - l + 1) r = mid;
        else l = mid + 1;
    }
    return l;
}

// 时间复杂度：O(n) * O(logn)
// O(n) 统计满足条件的苹果个数
// O(logn) 二分查找重复的区间
findDuplicate([3, 1, 3, 4, 2]);