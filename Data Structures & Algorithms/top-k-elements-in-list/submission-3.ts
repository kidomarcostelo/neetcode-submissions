class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // k is the length of the array 
        
        // 
        const map = new Map();

        for(const num of nums){
            if (!map.has(num)){
                map.set(num, 0);
            }

            map.set(num, map.get(num) + 1);
        }

        // sort the map base from the its value and return the keys 
        // with length k
        // return map.map(() => )
        //             .sort((a,b) => map[b]+map[a]);
        
            const arr = [...map.keys()]
                    .sort((a,b) => map[b] - map[a])


            const sorted = [...map.keys()]
                                    .sort((a,b) => map.get(b) - map.get(a));
        // return [...map.keys()];
        // return arr;
        return sorted.slice(0,k);
    }
}
