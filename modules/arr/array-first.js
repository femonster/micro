var isNumber = require("../number/is-number");

module.exports = function arrayFirst(arr, num) {
    if (!Array.isArray(arr)) {
        throw new Error("第一个参数必须是一个数组");
    }

    if (+num === 0) {
        num = 1;
    }
    if (arr.length === 0) {
        return null;
    }

    var first = arr.slice(0, isNumber(num) ? +num : 1);
    if (+num === 1 || num == null) {
        return first[0];
    }
    return first;
}