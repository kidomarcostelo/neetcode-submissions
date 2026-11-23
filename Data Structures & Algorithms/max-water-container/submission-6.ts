class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let ans = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right){

            let curr = Math.min(heights[left], heights[right]) * (right - left);
            ans = Math.max(ans, curr);

            if(heights[left] > heights[right]){
                right--;
            }
            else{
                left++;
            }
        }

        return ans;
    }
}
