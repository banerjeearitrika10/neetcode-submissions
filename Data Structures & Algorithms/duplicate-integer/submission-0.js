class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let arr = nums.filter((item,index)=>nums.indexOf(item) != index);
        return arr.length > 0 ? true :false
    }
}
