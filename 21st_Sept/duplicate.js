// Find duplicate numbers

let arr = [1, 2, 3, 2, 4, 5, 3, 6, 1];
let duplicates = []
for (let num in arr){
    if (num in duplicates){
        duplicates.push(num)
        console.log(duplicates)
    }
}