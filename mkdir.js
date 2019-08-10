const fs = require('fs');

// fs.mkdirSync('341-360');
const mk = async (start, end, j) => {
    for (let i = start; i <= end - j; i = i + j) {
        await fs.mkdirSync(`${i + 1}-${i + j}`);
    }
}

mk(300, 1000, 100);