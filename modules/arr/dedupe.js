// clone 一份出来
module.exports = function dedupe(arr, hasher) {
    hasher = hasher || JSON.stringify;

    const clone = [];
    const lookup = {};

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let hashed = hasher(el);
        if (!lookup[hashed]) {
            clone.push(el);
            lookup[hashed] = true;
        }
    }

    return clone;
}