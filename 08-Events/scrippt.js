//Create a toggel buttoon thhat changes thhe screen to dark mode when clicked and light mode when clicked again

let newBtn = document.querySelector("#btn");
let curMode = "light";
let body = document.querySelector("body")

newBtn.addEventListener("click", () => {
    if (curMode === "light") {
        body.style.color = "white";
        body.style.backgroundColor = "black";
        console.log("You are in dark mode");
        curMode = "dark";
    } else {
        body.style.color = "black";
        body.style.backgroundColor = "white";
        console.log("You are in light mode");
        curMode = "light";
    }
});