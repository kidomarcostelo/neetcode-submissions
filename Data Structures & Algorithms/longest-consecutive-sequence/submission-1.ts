class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0; // Handle empty array immediately

        // 1. Deduplicate first, then sort the clean array
        const uniqueSet = new Set(nums);
        const arr = [...uniqueSet].sort((a, b) => a - b);

        // 2. Initialize winner to 1 since any non-empty array has a minimum streak of 1
        let winner = 1;
        let ctr = 1;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] + 1 === arr[i + 1]) {
                ctr++;
            } else {
                ctr = 1;
            }

            if (ctr > winner) {
                winner = ctr;
            }
        }
        
        return winner;
    }
}
