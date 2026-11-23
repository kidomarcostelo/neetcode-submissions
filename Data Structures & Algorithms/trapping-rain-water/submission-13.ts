class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let ans = 0;
        const leftArr = new Array();
        const rightArr = new Array();

        if (!height || height.length < 2 ) return 0;
        for(let i = height.length - 1; i > -1; i--){
            let num = Math.max(rightArr[i+1] || 0, height[i + 1] || 0);

            // leftArr.push(num);
            rightArr[i] = num;
        }
        const ansArr = new Array();
        for(let i = 0; i < height.length; i++){
            let num = Math.max(leftArr[leftArr.length - 1] || 0, height[i - 1] || 0);

            leftArr[i] = num;

            let min = Math.min(num, rightArr[i]);
            ans += Math.max(0, min - height[i]);

        }
        return ans;
    }
}
