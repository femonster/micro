var isNumber = require("../number/is-number");

module.exports = function last(arr, n) {
    if (!Array.isArray(arr)) {
        throw new Error("第一个参数必须是一个数组");
    }

    var len = arr.length;
    if (len === 0) {
        return null;
    }

    n = isNumber(n) ? +n : 1;
    if (n === 1) {
        return arr[len - 1];
    }

    var res = new Array(n);
    while (n--) {
        res[n] = arr[--len];
    }

    return res;
}