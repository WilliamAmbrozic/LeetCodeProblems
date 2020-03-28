class Solution {
public:
    bool isPalindrome(int x) {
        string rev = std::to_string(x);
        reverse(rev.begin(), rev.end());
        return std::to_string(x) == rev;
    }
};
