class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groupStr = new Map();

        for(const str of strs){

            const sorted = str.split('').sort().join('')

            if (!groupStr.has(sorted)){
                groupStr.set(sorted, []);
            }

            groupStr.get(sorted).push(str);
        }

        return [...groupStr.values()];
    }
}
