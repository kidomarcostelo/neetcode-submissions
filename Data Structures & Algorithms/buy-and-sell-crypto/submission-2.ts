class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let answ = 0;
        let minimum = prices[0];
        for(let i = 1; i < prices.length; i++){
            minimum = Math.min(minimum, prices[i]);
            let roi = prices[i] - minimum;
            answ = Math.max(answ, roi);
        }   
        return answ;
    }
}
