class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
     mergeAlternately(word1, word2) {
        let letter='';
        let n = Math.min(word1.length,word2.length);
        for (let i=0;i<n;i++){
            letter += (word1[i]+word2[i]);
        }
        if(word1.length > n){
            letter += word1.slice(n);
        }
        if(word2.length > n){
            letter += word2.slice(n);
        }
        return letter;
    }
}
