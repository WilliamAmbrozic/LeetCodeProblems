class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :type: List[int]
        """
        hash = {}
        for a in range(len(nums)):
            if target - nums[a] in hash:
                return [hash.get(target - nums[a]), a]
            else:
                hash[nums[a]] = a
