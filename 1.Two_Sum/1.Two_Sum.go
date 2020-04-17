func twoSum(nums []int, target int) []int {
    hash :=  make(map[int]int)
    for i := 0; i < len(nums); i++ {
        if _, ok := hash[target - nums[i]]; ok {
            return []int{hash[target - nums[i]], i}
        } else {
            hash[nums[i]] = i
        }
    }
    return []int{}
}
