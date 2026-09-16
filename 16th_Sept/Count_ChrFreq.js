// Count character frequency

let str = "javascript";
let str1 = {}
for (let char of str){
    if (str1[char]){
        str1[char]++;
    }else{
        str1[char] = 1
    }
}

console.log(str1)