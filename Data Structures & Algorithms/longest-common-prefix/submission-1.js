class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
             let first = strs[0];
            let prefix ='';
            for(let i =0;i<first.length;i++){
                for(let j=1;j<strs.length;j++){
                    if(strs[j][i] !== first[i]){
                        return prefix;
                    }
                }
                prefix+=first[i];
            }
            return prefix;
    }
}
