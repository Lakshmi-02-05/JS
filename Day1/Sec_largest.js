// Find the second largest distinct number

let arr = [10, 5, 20, 8, 20, 15];
let unique = [...new Set(arr)];
unique.sort((a, b) => b - a);
console.log(unique[1]);
