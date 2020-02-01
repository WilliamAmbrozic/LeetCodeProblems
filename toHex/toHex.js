/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num < 0)
        num = 0xFFFFFFFF + num + 1
    return num.toString(16);
};
