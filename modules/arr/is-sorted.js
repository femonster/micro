// 用于判断数组是否已经排序

function defaultComparator(a, b) {
    return a - b;
}

module.exports = function checksort(arr, comparator) {
    comparator = comparator || defaultComparator;

    for (var i = 1, len = arr.length; i < len; ++i) {
        if (comparator(arr[i - 1], arr[i]) > 0) return false;
    }

    return true;
}