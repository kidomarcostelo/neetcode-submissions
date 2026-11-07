class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;

        // const
        while (left < right){

            if (!this.isCharacter(s[left])){
                left++;
                continue;
            }
            if (!this.isCharacter(s[right])){
                console.log(s[right]);
                
                right--;
                continue;
            }

            let charLeft = s[left].toLowerCase();
            let charRight = s[right].toLowerCase();
            console.log(`${charLeft} - ${charRight}`);
            if (charLeft != charRight)
                return false;
            else {
                left++;
                right--;
            }

        }
        return true;
    }

    isCharacter(s: string): boolean{
        if (s >= 'a' && s <= 'z')
            return true;
        if (s >= 'A' && s <= 'Z')
            return true;
        if (s >= '0' && s <= '9') return true;

        return false;
    }
}
