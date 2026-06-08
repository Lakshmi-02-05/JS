//You are given an array of at least length 3 containing integers. 
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
//Write a function that takes the array as an argument and returns this "outlier" N.

//gpt
function findOutlier(integers) {
    const firstThree = integers.slice(0, 3);

    const evenCount = firstThree.filter(num => num % 2 === 0).length;

    const majorityIsEven = evenCount >= 2;

    return integers.find(
        num => majorityIsEven ? num % 2 !== 0 : num % 2 === 0
    );
}