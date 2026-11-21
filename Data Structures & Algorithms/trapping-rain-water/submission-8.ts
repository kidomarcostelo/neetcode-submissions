class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        if (!height || height.length == 0) return 0;
        let ans = 0;
        let left = 0;
        let right = height.length - 1;
        let sentL = height[left];
        let sentR = height[right];

        while (left < right) {
            if (sentR > sentL) {
                left++;
                
                sentL = Math.max(sentL, height[left]);
                ans += sentL - height[left];
            } else {
                right--;
                sentR = Math.max(sentR, height[right]);
                ans += sentR - height[right];
                
            }
        }

        return ans;
    }
}
