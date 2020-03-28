/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var neg = false;
    if (x < 0) {
        neg = true;
        x*= -1;
    }
    var reverse = parseInt(x.toString().split("").reverse().join(""));
    if (reverse > 0x80000000 || reverse < -0x7fffffff)
        return 0;
    else if (neg)
        return -reverse;
    return reverse;
};
