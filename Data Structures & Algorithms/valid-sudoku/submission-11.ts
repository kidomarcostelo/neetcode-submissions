class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // thought process:
        // we can create a map of each rows and columns and
        // within that map lets utilize set to check for duplicates



        const row = new Map();
        const col = new Map();
        const square = new Map();

        for (let i=0; i<9; i++){
            for(let j = 0; j < 9; j++){
                if (board[i][j] == '.') continue;
                // square names should be identical per square
                // name should be the first ij, on every square
                // example
                // 00 30 60
                // 03 33 63
                // 06 36 66

                // so if i have 3,5
                // Math.floor(i / 3) * 3;  
                const name = `${(Math.floor(i/3)*3)}${(Math.floor(j/3)*3)}`
                // 0,0


                if (
                    (row.has(i) && (row.get(i)).has(board[i][j])) ||                    (col.has(j) && ((col.get(j)).has(board[i][j]))) ||                    (square.has(name) && ((square.get(name))).has(board[i][j]))         
                ){
                    return false;
                }

                if (!row.has(i)) row.set(i, new Set());
                if (!col.has(j)) col.set(j, new Set());
                if (!square.has(name)) square.set(name, new Set());
                
                // add
                row.set(i, (row.get(i)).add(board[i][j]));
                col.set(j, (col.get(j)).add(board[i][j]));
                square.set(name, (square.get(name)).add(board[i][j]));
                
                //square.set(name, (row.get(name)).add(board[i][j]));
            }
        }


        return true;
    }
}
