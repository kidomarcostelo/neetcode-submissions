class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const left = Array(nums.length);
        const right = Array(nums.length);

        // left.push(1);
        left[0] = 1
        right[nums.length -1] = 1;
        for (let i = 1; i < nums.length; i++){
            
            // left.push((left[i-1] * nums[i-1]));
            left[i] = (left[i-1] * nums[i-1]);
        }    
        const final = [];
        for (let i = nums.length - 2; i > -1; i--){
            right[i] = right[i+1] * nums[i+1];
            final[i] = right[i] * left[i];
        }
        final[nums.length-1] = left[nums.length-1] * right[nums.length-1]
        return final;

    }
}
