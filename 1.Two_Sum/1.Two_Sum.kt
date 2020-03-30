class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val hash = HashMap<Int, Int>()
        for (i in 0 until nums.size) {
            if (hash.containsKey(target - nums[i]))
                return intArrayOf(hash.get(target - nums[i]) as Int, i)
            else
                hash.put(nums[i], i)
        }
        return intArrayOf()
    }
}
