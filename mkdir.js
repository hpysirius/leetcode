/**
 * 创建文件夹区间
 * author: hpysirius
 */
const fs = require('fs');

const mk = async (start, end, j) => {
    for (let i = start; i <= end - j; i = i + j) {
        await fs.mkdirSync(`${i + 1}-${i + j}`);
    }
}

mk(300, 1000, 100);