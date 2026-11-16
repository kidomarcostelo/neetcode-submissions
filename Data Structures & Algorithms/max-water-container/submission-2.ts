class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;

        let ans = 0;
        while(left < right){
            const width = right - left;
            const length = Math.min(heights[left], heights[right]);

            ans = Math.max(ans, width*length);

            if (heights[left] > heights[right])
                right--;
            else
                left++;
            
        }

        return ans;
    }
}
