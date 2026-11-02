class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const struct = new Set(nums);

        // goal is to find the pinaka gamay na number in the set 
        // and start iterating from there 
        let highest = 0;
        let current = 0;

        // [100, 99, 2, 5, 3, 4]
        // 100,4,200,1,3,2
        for(let num of struct){
            // i need a checker that will check for the lowest possible   
            //iterator
            if (struct.has(num - 1)){
                continue;
            }
            
            // loop till the end +1 iteration
            while(struct.has(num)){
                current ++;

                num++;
            }
            if (current > highest){
                console.log(current)
                console.log(highest)
                highest = current;
            }
                current = 0;
        }
        return highest;
    }   
}
