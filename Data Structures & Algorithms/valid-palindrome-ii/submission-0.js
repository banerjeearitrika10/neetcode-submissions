class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let reverse = s.split('').reverse().join('');
        if(s == reverse){
            return true;
        }
        else{
            for(let i=0;i<s.length;i++){
                let ss = s.slice(0,i) + s.slice(i+1);
                 let ssr = ss.split('').reverse().join('');
                 console.log(ss,ssr)
                 if(ss == ssr) return true;

            }
            return false;
        }

    }
}
