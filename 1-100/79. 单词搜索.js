/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    // 上、右、下、左
    let dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];
    const dfs = (board, x, y, word, u) => {
        if (board[x][y] !== word[u]) return false;
        if (u === word.length - 1) return true;
        board[x][y] = '.';
        for (let i = 0; i < 4; i++) {
            let a = x + dx[i], b = y + dy[i]; 
            if (a >= 0 && a < n && b >= 0 && b < m)
                if (dfs(board, a, b, word, u + 1)) return true;
        }
        // 回溯，恢复初始状态
        board[x][y] = word[u];
        return false;
    }

    if (!board.length || !board[0].length) return false;
    let n = board.length, m = board[0].length;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++)
            if (dfs(board, i, j, word, 0)) return true;
    return false;
};