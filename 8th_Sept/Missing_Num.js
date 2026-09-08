//Find the missing number

let arr = [1,2,3,5,6]

for (let i = 1; i <= arr.length+1; i += 1){
    if (!arr.includes(i)){
        console.log("Missing Number: ", i);
    }
}

