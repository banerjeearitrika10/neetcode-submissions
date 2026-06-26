class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let map = {};

        for(let i=0;i<nums.length;i++){
            if(!map[nums[i]]){
                map[nums[i]]=0
            }
            map[nums[i]]++;
        }
        let index=0
        for(let color=0;color<=2;color++){
            while((map[color] || 0) > 0){
                nums[index++]=color;
                map[color]--;
            }
        }
    }
}
