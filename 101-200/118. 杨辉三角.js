/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 看了别人题解之后写的代码
const generate = l => {
    if(l === 0) return [];
    let res = [];
    for(let i = 0; i < l; i++){
        let nArr = [];
        for(let j = 0; j <= i; j++){
            if(j > 0 && j < i) nArr.push(res[i - 1][j - 1] + res[i - 1][j]);
            else nArr.push(1);
        }
        res.push(nArr);
    }
    return res;
}


// 自己的代码，代码还是太丑了
// 垃圾了
// var generate = function (l) {
//     let m = 0, n = 0;
//     if(l === 0) return [];
//     const res = new Array(l);
//     for (let i = 0; i < l; i++) {
//         res[i] = [];
//     }
//     while (n < l) {
//         if (n === 0) res[n][m] = 1;
//         m = 0;
//         while (m <= n) {
//             if (m === 0 || m === n) res[n][m] = 1;
//             else res[n][m] = res[n - 1][m - 1] + res[n - 1][m];
//             m++;
//         }
//         n++
//     }
//     return res;
// };

console.log(generate(5));