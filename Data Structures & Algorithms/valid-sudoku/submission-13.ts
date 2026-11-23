class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const row = new Map();
        const col = new Map();
        const sqr = new Map();
        for(let i = 0; i < 9; i++){
            for (let j = 0; j <9; j++){
                const num = board[i][j];
                if (num == '.') continue;
                // 00 03 06
                // 30 33 36
                // 60 63 66
                const name = `${Math.floor(i / 3)}${Math.floor(j/3)}`;
                // checker for all
                if ((row.has(i) && (row.get(i)).has(num)) ||
                    (col.has(j) && (col.get(j)).has(num)) ||
                    (sqr.has(name) && (sqr.get(name)).has(num))){
                    return false;
                }

                if(!row.has(i))
                    row.set(i, new Set());
                if(!col.has(j))
                    col.set(j, new Set());
                if(!sqr.has(name))
                    sqr.set(name, new Set());

                
                row.set(i, (row.get(i)).add(num));
                col.set(j, (col.get(j)).add(num));
                sqr.set(name, (sqr.get(name)).add(num));
            }
        }

        return true;
    }
}
