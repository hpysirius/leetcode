/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
    let m = matrix.length;
    if (m === 1) return matrix[0];
    if (m === 0) return [];
    let n = matrix[0].length;
    let i = 0, j = 0, ei = m - 1, ej = n - 1;
    let result = [];
    const printEdge = (matrix, tR, tC, dR, dC) => {
        if (tR === dR) {
            for (let i = tC; i <= dC; i++) {
                result.push(matrix[tR][i]);
            }
        }else if(tC === dC){
            for (let i = tR; i <= dR; i++) {
                result.push(matrix[i][tC]);
            }
        }else{
            let curC = tC;
            let curR = tR;
            while(curC !== dC){
                result.push(matrix[tR][curC]);
                curC++;
            }
            while(curR !== dR){
                result.push(matrix[curR][dC]);
                curR++;
            }
            while(curC !== tC){
                result.push(matrix[dR][curC]);
                curC--;
            }
            while(curR !== tR){
                result.push(matrix[curR][tC]);
                curR--;
            }
        }
    }
    while (i <= ei && j <= ej) {
        printEdge(matrix, i++, j++, ei--, ej--);
    }
    return result;
};

const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

console.log(spiralOrder(matrix));