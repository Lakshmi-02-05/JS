//Given a string which includes only letters, write a function that produces such output 'A-Bb-Ccc-Dddd' for input 'abcd'

const accum = str => {
  return str
    .split("")
    .map((char, index) => {
      return char.toUpperCase() + char.toLowerCase().repeat(index);
    })
    .join("-");
};

console.log(accum('abcd'));    
console.log(accum('cwAt'));    
console.log(accum('t'));    