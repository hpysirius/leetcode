const getRow = l => {
    if (l === 0) return [1];
    let res = [];
    for (let i = 0; i < l + 1; i++) {
        let nArr = [];
        for (let j = 0; j <= i; j++) {
            if (j > 0 && j < i) nArr.push(res[i - 1][j - 1] + res[i - 1][j]);
            else nArr.push(1);
        }
        res.push(nArr);
    }
    return res[l];
}
