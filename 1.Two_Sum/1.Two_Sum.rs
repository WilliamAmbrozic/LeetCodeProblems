use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut hash: HashMap<i32, i32> = HashMap::new();
        for i in 0..nums.len() {
            if hash.contains_key(&(target - nums[i])) == true {
                return vec![hash[&(target - nums[i])] as i32, i as i32];
            } else {
                hash.insert(nums[i] as i32, i as i32);
            }
        }
        return vec![];
    }
}
