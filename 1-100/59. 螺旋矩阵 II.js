const generateMatrix = n => {
    const arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(n);
    }
    let l = 0, t = 0, r = n - 1, b = n - 1;
    let num = 1;
    while (num <= n * n) {
        // left -> right
        for (let i = l; i <= r; i++) arr[t][i] = num++;
        t++;
        // top -> bottom
        for (let i = t; i <= b; i++) arr[i][r] = num++;
        r--;
        // right -> left
        for(let i = r; i >= l; i--) arr[b][i] = num++;
        b--;
        // bottom -> top
        for(let i = b; i >= t; i--) arr[i][l] = num++;
        l++;
    }
    return arr;
}

console.log(generateMatrix(4));