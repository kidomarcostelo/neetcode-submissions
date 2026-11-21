class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let ans = 0;
        let sentL = 0;
        let sentR = height.length - 1;
        let left = 0;
        let right = height.length - 1;

        while (left < right) {
            if (height[sentR] > height[sentL]) {
                left++;
                if (height[left] > height[sentL]) {
                    sentL = left;
                }
                ans += Math.max(0, height[sentL] - height[left]);
            } else {
                right--;
                if (height[right] > height[sentR]) {
                    sentR = right;
                }
                ans += Math.max(0, height[sentR] - height[right]);
            }
        }

        return ans;
    }
}
