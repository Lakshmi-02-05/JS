//The clock shows h hours (0 <= h <= 23), m minutes (0 <= m <= 59) and s seconds (0 <= s <= 59) after midnight. 
//Your task is to write a function which returns the time since midnight in milliseconds. 
//There are 1,000 milliseconds in a second.

//GPT
let time = (h,m,s) => {
    return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
};

console.log(time(2,1,1));
console.log(time(1, 1, 1));