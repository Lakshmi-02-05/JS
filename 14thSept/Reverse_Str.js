// Reverse each word in a sentence

let str = "hello world";

let result = str
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ")

console.log(result);
