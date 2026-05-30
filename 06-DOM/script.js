//Create a H2 heading element with text - "Hello JavaScript". 
//Append "from Apna College students" to this text using JS

let h2 = document.querryselector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "from ABC..";

//Create 3 divs with common class name - "box". Access them & add some unique text to each of them.

let divs = document.guerryselector("box");

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}