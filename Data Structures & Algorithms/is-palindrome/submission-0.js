class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         let cleaned = s.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
        
        return cleaned == cleaned.trim().split('').reverse().join('')
    }
}
