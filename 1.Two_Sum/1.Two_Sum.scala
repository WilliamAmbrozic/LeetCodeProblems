import scala.collection.mutable.HashMap

object Solution {
    def twoSum(nums: Array[Int], target: Int): Array[Int] = {
        var hash = new HashMap[Int, Int]
        for (i <- 0 until nums.size) {
            if (hash.contains(target - nums(i)))
                return Array(hash(target - nums(i)), i)
            else 
                hash += (nums(i)->i)
        }
        return Array();
    }
}
