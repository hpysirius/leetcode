const findDuplicate = nums => {
    let n = nums.length - 1;
    let l = 1, r = n;
    while(l < r) {
        let mid = l + r >> 1;
        let cnt = 0;
        for(x of nums) {
            if(x >= l && x <= mid){
                cnt ++;
            }
        }
        // cnt 苹果  mid - l + 1  篮子
        // 如果苹果>篮子，重复的一个苹果必在这个区间内
        if(cnt > mid - l + 1)  r = mid;
        else l = mid + 1;
    }
    return l;
}

findDuplicate([3,1,3,4,2]);