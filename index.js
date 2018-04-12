var red = '\x1B[31m%s\x1B[0m';

console.log(red, "-------- is-sorted -------------------");

var sorted = require("./modules/arr/is-sorted");
console.log("sorted([1, 2, 3]) =>", sorted([1, 2, 3]));
console.log("sorted([3, 1, 2]) =>", sorted([3, 1, 2]));


console.log(red, "-------- array-first -----------------");

var first = require("./modules/arr/array-first");
console.log("first([1, 2, 3]) =>", first([1, 2, 3]));
console.log("first([1, 2, 3]) =>", first([1, 2, 3], 2));



console.log(red, "-------- array-last -----------------");

var last = require("./modules/arr/array-last");
console.log("last([1, 2, 3]) =>", last([1, 2, 3]));
console.log("last([1, 2, 3]) =>", last([1, 2, 3], 2));


console.log(red, "-------- array-dedupe -----------------");

var dedupe = require("./modules/arr/dedupe");
console.log("dedupe([1, 2, 2, 3]) =>", dedupe([1, 2, 2, 3]));
// 以对象中的某个属性值为准进行去重
var arr_obj = [{ a: 2, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 3 }, { a: 1, b: 4 }];
console.log(dedupe(arr_obj, val => val.a));

var d1 = new Date(),
    d2 = new Date(2017)
console.log(dedupe([d1, d1, d1, d2, d2]))

console.log(red, "-------- array-diff -----------------");

var diff = require("./modules/arr/arr-diff");
console.log("diff([1,2,3,4],[1,3],[2]) =>", diff([1, 2, 3, 4], [1, 3], [2]));

console.log(red, "-------- filled-array -----------------");

var filledArray = require("./modules/arr/filled-array");
console.log("filledArray(1,4) =>", filledArray(1, 4));
console.log("filledArray(i => (i + 1),4) =>", filledArray(i => (i + 1), 4));