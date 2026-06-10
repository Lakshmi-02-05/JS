//14. Array Diff
//Remove all values from array a that exist in array b.

function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item));
}
console.log(arrayDiff([1, 2, 2], [1]));
console.log(arrayDiff([1, 2, 2], [2]));
