from heapq import merge

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        merged = list(merge(nums1, nums2))
        length = len(merged)
        if len(merged) % 2:
            return merged[int(length/2)]
        return (merged[int(length/2)] + merged[int(length/2) - 1]) / 2.0
