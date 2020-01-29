/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = new Map();
    for (a = 0; a < nums.length; a++) {
        if(hash.has(target - nums[a]))
            return [hash.get(target - nums[a], a), a];
        else 
            hash.set(nums[a], a);
    }
};
