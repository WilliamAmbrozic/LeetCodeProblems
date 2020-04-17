class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var hash = [Int : Int]()
        for i in 0...nums.count {
            if (hash[target - nums[i]] != nil) {
                return [hash[target - nums[i]]!, i]
            }
            else {
                hash[nums[i]] = i
            }
        }
        return []
    }
}
