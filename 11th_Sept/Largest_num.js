// Find the largest number

let arr = [12, 45, 7, 89, 23, 56];
let largest = arr[0];
for (let num of arr){
    if (num > largest){
        largest = num;
    }
}
console.log("Largest Num:",largest)


// OR
// let largest1 = Math.max(...arr)
// console.log("Largest Num:",largest1)