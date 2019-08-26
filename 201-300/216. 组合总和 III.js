const combinationSum3 = (k, n) => {
    let ans = [], path = [];
    dfs(k, 1, n);
    return ans;

    function dfs(k, start, n) {
        if (!k && !n) {
            ans.push([...path]);
            return;
        }
        for (let i = start; i <= 9; i++) {
            path.push(i);
            dfs(k - 1, i + 1, n - i);
            path.pop();
        }
    }
}