class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // const str = s.split(' ').join('');

        // const regex =  /^[a-zA-Z0-9]$/;
        const str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        // const str = s.split('').map(a => (regex.test(a)));
        // strip the non-alphanumeric characters

        // order is important
        // console.log(str)
        // divide by 2
        // reverse the right 
        // check
        if (str.length <= 1) {
  return true;
}

const num = Math.floor(str.length / 2);
const left = str.slice(0, num);
const right = str.slice(-num);
const reversed = right.split("").reverse().join("");

return left === reversed;
    }
}
