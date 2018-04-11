module.exports = function isNumber(num) {
    if (typeof num === "string") {
        num = num.trim();
    }
    if (!num && num !== 0) return false;
    num = Number(num);
    if (typeof num === "number" && !isNaN(num)) {
        return true;
    }
    return false;
}