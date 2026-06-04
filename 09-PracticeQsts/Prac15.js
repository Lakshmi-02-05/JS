//Write a function that given an integer, checks to see if it is a square number. A square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

const isSquare = n => {
  let sqrt = Math.sqrt(n);
  let roundNum = Math.floor(sqrt);
  if(sqrt === roundNum){
    console.log("Given integer is Square Root"); 
    return sqrt === roundNum;
  }else{
    console.log("Given integer is not a square number");
  }
};
console.log(isSquare(25));
console.log(isSquare(4));
console.log(isSquare(93));