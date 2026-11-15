class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a,b) => a-b);

        const arr: number[][] = new Array();

        for (let i = 0; i < nums.length; i++){
            // i = a 
            if(nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i-1]) continue;
            let b = i+1;
            let c = nums.length - 1;

            while(b < c){
                let sum = nums[i] + nums[b] + nums[c];
                // [-4, -1, -1, 0 ,1, 2]
                if(sum == 0){
                    arr.push([nums[i], nums[b], nums[c]]);
                    b++;
                    c--;

                    while((b < c) && nums[b] == nums[b-1]){
                        b++;
                    }
                }
                else if (sum < 0){
                    b++;
                }
                else {
                    c--;
                }
            }

        }

        return arr;
    }
}
