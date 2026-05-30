//For  a given array of numbers, print the square of each value using the forEach loop.

let num = [2, 3, 4, 6, 8];

num.forEach((sqr) => {
    console.log(sqr * sqr);
});


// Given array of marksof students, filter out marks of stuent scored 90+;

let score = [92, 95, 88, 78, 35, 90];

let toppers = score.filter((val) => {
    return val >= 90;

});
console.log(toppers);
