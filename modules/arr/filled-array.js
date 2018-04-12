// 填充数组（任何数据）
/**
 * filledArray(filler, count)
 * @argument filler:Value to fill the array with.
 * @argument count :Number of items to fill the array with.
 */

module.exports = function(item, n) {
    var ret = new Array(n);
    var isFn = typeof item === 'function';
    if (!isFn && typeof ret.fill === 'function') {
        return ret.fill(item);
    }
    // item(index,len,arr)
    for (var i = 0; i < n; i++) {
        ret[i] = isFn ? item(i, n, ret) : item;
    }

    return ret;
}