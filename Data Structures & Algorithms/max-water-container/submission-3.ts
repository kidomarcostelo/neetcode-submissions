class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let highest = 0;
        let b = 0;
        let c = heights.length - 1;
        //
        while (b < c ){
            let width = c - b;
            let length = Math.min(heights[b], heights[c]);

            let area = width * length;

            highest = Math.max(highest, area);

            if (heights[b] > heights[c]){
                c--;
            }
            else{
                b++;
            }
        }

        return highest;
    }
}
