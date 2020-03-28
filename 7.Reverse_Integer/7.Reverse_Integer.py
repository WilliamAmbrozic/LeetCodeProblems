class Solution:
    def reverse(self, x: int) -> int:
        neg = False
        if x < 0:
            neg = True
            x*= -1
        reverse = int(str(x)[::-1])
        if reverse > 0x80000000 or reverse < -0x7fffffff:
            return 0
        elif neg:
            return -reverse
        return reverse
