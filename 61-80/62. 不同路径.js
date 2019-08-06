var uniquePaths = function (m, n) {
    const matrix = new Array(m + 1);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(n + 1).fill(0);
    }
    matrix[0][1] = 1;
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }
    return matrix[m][n];
};

console.log(uniquePaths(3, 2));