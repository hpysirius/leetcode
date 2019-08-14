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
        if(cnt > mid - l + 1)  r = mid;
        else l = mid + 1;
    }
    return l;
}