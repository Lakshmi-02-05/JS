//Remove duplicates

let arr = [1, 2, 2, 3, 4, 3, 5, 5]
rmv_duplicate = []
for (let num of arr){
    if (!rmv_duplicate.includes(num)){
        rmv_duplicate.push(num)
    }
}

console.log(rmv_duplicate);