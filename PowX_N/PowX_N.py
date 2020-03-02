class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0: 
            return 1
        tmp = self.myPow(x, int(n/2))
        if n % 2 == 0:
            return tmp * tmp
        else:
            if n > 0: 
                return x * tmp * tmp  
            else:
                return tmp * tmp / x
