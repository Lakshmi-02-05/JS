//You probably know the "like" system from Facebook and other social media. People can "like" posts, photos or other items. 
// We want to create the text that should be displayed next to such an item.
//Implement a function that takes an input array, containing the names of people who like an item and returns an output string formatted nicely as shown below.
//Peter likes this'

const likes = names => {
  const len = names.length;
  let output;
  if (len === 0) {
    output = 'no one likes this';
  } else if (len === 1) {
    output = `${names[0]} likes this`;
  } else if (len === 2) {
    output = `${names[0]} and ${names[1]} like this`;
  } else if (len === 3) {
    output = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    output = `${names[0]}, ${names[1]} and ${len - 2} others like this`;
  }
  return output;
};

console.log(likes([])); 
console.log(likes(['Peter'])); 
console.log(likes(['Jacob', 'Alex'])); 


let like = name => {
    for(let arr of name){
        let len = name.length;
        let result = `${name} likes this`
    }
};
