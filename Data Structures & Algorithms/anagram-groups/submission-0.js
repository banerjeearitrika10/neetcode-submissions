class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let nested = {};
        for(let i = 0;i<strs.length;i++){
            const sorted = strs[i].split('').sort().join('');
            if(!nested[sorted]){
                nested[sorted]=[]
            }
            nested[sorted].push(strs[i]);
        }
    return Object.values(nested);
    }
}
