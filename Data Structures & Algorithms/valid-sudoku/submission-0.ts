class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // 3 checks 
        // [x][y]
        // [0][0] -> [8][0] = true
        // [0][0] -> [0][8] = true
        // [0][0], [0][1], [0][2], [1][0], [1],[1], [1][2] -> [2][2]

        // set for this? this checks for duplicate
        // const struct = new Set();
        // x traversal 
        for (let i = 0; i < 9; i++){
            let struct = new Set();
            for (let j = 0; j < 9; j++){
                if (board[i][j] == '.')
                    continue
                
                let num = Number(board[i][j])

                if (struct.has(num)) return false;

                struct.add(num);
            }
        }
        

        // y traversal
        for (let i = 0; i < 9; i++){
            let struct = new Set();
            for (let j = 0; j < 9; j++){
                if (board[j][i] == '.')
                    continue
                
                let num = Number(board[j][i])

                if (struct.has(num)) return false;

                struct.add(num);
            }
        }

        for (let square = 0; square < 9; square++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === '.') continue;
                    if (seen.has(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }
        return true;    
    }

}
