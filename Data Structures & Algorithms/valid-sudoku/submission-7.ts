class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {

        // set in a map
        const row = new Map();
        const col = new Map();
        const square = new Map();

        for (let i = 0; i < 9; i++){
            for (let j = 0; j < 9; j++){
                
                // square indices, [0,0], [3,0], [6,0]
                //                 [0,3], [3,3], [6,3]
                //                 [0,6], [3,6], [6,6]

                // example: 5,5 => [3,3]
                // example: 5,8 => [3,3]
                // Math.floor(5 / 3) = 1 * 3 = 3
                // Math.floor

                // 3,4 => 3,3
                // 5,8
                // 2,5 => 0,3
                const squareName = `${Math.floor(i / 3) * 3},${Math.floor(j / 3) * 3}`;
                let num = board[i][j]
                if (board[i][j]=='.') continue;

                // condition that checks if a number is in the set
                if (
                    row.has(i) && (row.get(i)).has(num) ||
                    col.has(j) && (col.get(j)).has(num) || 
                    square.has(squareName) && (square.get(squareName)).has(num)
                ){
                    return false;
                }

                // init
                if (!row.has(i)) row.set(i, new Set());
                if (!col.has(j)) col.set(j, new Set());
                if (!square.has(squareName)) square.set(squareName, new Set());
                
                // add num 
                row.set(i, (row.get(i)).add(num));
                col.set(j, (col.get(j)).add(num));
                square.set(squareName, (square.get(squareName).add(num)))

            }
        }

        return true;
    }
}
