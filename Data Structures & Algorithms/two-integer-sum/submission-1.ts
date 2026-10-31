class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const store = new Map();

        for (let i = 0; i < nums.length; i++){

            const diff = target -  nums[i];

            if (store.has(diff)){
                return [store.get(diff), i];
            }

            store.set(nums[i] , i);

        }
        return [];
    }
}
