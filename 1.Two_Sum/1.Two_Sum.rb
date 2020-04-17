# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    hash = Hash.new
    nums.each_with_index { | val, a |
        if(hash.key?(target - val))
            return hash[target - val], a
        else 
            hash[val] = a
        end
        }
end
