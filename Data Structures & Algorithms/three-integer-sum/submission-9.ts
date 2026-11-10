class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const arr = nums.sort((a,b) => a - b);

        const ans = new Array();
        for (let i = 0; i < nums.length; i++){
            // skips duplicate
            if (i > 0 && arr[i] == arr[i-1]) continue;

            let twoSum = this.twoSum(arr.slice(i+1), arr[i]*-1);

            if (twoSum.length != 0)
                for (let pair of twoSum) ans.push([arr[i], ...pair]);
        }

        return ans;
    }
    twoSum(nums: number[], target: number): number[][]{
        let left = 0;
        let right = nums.length -1;

        const arr = new Array();
        while(left < right){
            
            let sum = nums[left] + nums[right];
            if (sum == target) {
                // 1. Push the valid pair first
                arr.push([nums[left], nums[right]]);

                // 2. Skip all duplicates using 'while' to handle 3+ identical numbers
                while (left < right && nums[left] == nums[left+1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right-1]) {
                    right--;
                }

                // 3. Move both pointers inward to evaluate the next potential pair
                left++;
                right--;
            }

            else if (sum < target){
                left++;
            }
            else {
                right--;
            }
        }

        return arr;
    }
}
