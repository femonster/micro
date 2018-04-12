module.exports = function diff(arr) {
    var len = arguments.length,
        idx = 0;
    while (++idx < len) {
        arr = diffArray(arr, arguments[idx]);
    }
    return arr;
}

function diffArray(one, two) {
    if (!Array.isArray(two)) {
        return one.slice();
    }
    var tlen = two.length;
    var olen = one.length;
    var idx = -1;
    var arr = [];

    while (++idx < olen) {
        var ele = one[idx];
        var hasEle = false;
        for (var i = 0; i < tlen; i++) {
            var val = two[i];

            if (ele === val) {
                hasEle = true;
                break;
            }
        }

        if (hasEle === false) {
            arr.push(ele);
        }
    }

    return arr;
}