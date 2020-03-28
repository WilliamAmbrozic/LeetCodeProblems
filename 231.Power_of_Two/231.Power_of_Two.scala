object Solution {
    def isPowerOfTwo(n: Int): Boolean = {
        return n > 0 && (n & -n) == n;
    }
}
