class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const struct = new Set(nums);
        let longest = 0;
        for (let num of nums){

            // checks if this a number if it has the
            // lesser number than him
            console.log(num)
            if (struct.has(num - 1)){
                continue;
            }
            // we need to ge the root
            let curr = 0;
            // while there is still a +1 number
            let val = num;
            while(struct.has(val)){
                curr++;
                // checks if there is still a another +1
                if(struct.has(val + 1)){
                    // i++;
                    val++;
                }
                // the end
                else{
                    console.log('here')
                    if (curr > longest){
                        longest = curr;
                    }
                    // curr = 0;
                    break;
                }

            }
        }

        return longest;
    }
}
