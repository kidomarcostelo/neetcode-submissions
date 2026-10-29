class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counter = new Map();

        for (const num of nums){
            
        
            counter.set(num, (counter.get(num) || 0) + 1);

        }

        
            const sorted = [...counter.keys()]
                                .sort((a,b) => counter.get(b) - counter.get(a));
            // k as index 
            return sorted.slice(0, k);
    }
}
