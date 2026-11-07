class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const struct = new Set(numbers);
        const visited = new Map()
        for (let i = 0; i < numbers.length; i++){
            let diff = target - numbers[i];

            if (visited.has(diff)){
                return [ visited.get(diff), i+1];
            } 

            visited.set(numbers[i], i+1);

            // visited.add(numbers[i]);
            // console.log(visited)
        }

        return [];
    }
}
