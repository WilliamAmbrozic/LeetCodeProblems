/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //creating hashmap
    const hash = new Map();
    //main search loop
    for (a = 0; a < nums.length; a++) {
        //checking if we have seen are targets compliment
        if(hash.has(target - nums[a]))
            //found, returning our result
            return [hash.get(target - nums[a], a), a];
        else 
            //adding what we've seen to the hashmap
            hash.set(nums[a], a);
    }
};
