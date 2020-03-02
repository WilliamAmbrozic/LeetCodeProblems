# @param {Integer} x
# @return {Integer}
def reverse(x)
    neg = false
    if x < 0
        neg = true
        x*= -1
    end
    reverse = x.to_s.reverse.to_i
    if reverse > 0x80000000 or reverse < -0x7fffffff
        return 0
    elsif neg
        return -reverse
    end
    return reverse
end
