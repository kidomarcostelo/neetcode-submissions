class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let ans = 0;
        let left = 0;
        let right = height.length - 1;
        let sentL = height[left];
        let rightL = height[right];

        if(!height || height.length < 2) return 0;

        while(left < right){
            if(sentL > rightL){
                right--;
                rightL = Math.max(height[right], rightL);
                ans += rightL - height[right];
            }
            else {
                left++;
                sentL = Math.max(height[left], sentL);
                ans += sentL - height[left]
            }
        }
        return ans;
    }
}
