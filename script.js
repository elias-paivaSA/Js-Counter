
const number = document.getElementById("main-number");
const header = document.getElementById("header");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");

reset.addEventListener("click", (event) => {
    if (number.innerHTML !== 0) number.innerHTML = 0;
        number.style.color = "black"
});

increase.addEventListener("click", (event) => {
    if (number.innerHTML >= 0 || number.innerHTML < 0) number.innerHTML++
    if (number.innerHTML > 0) number.style.color = "purple";
    if (number.innerHTML == 0) number.style.color = "black";
});

decrease.addEventListener("click", (event) => {
    if (number.innerHTML <= 0 || number.innerHTML > 0)
        number.innerHTML--
    if (number.innerHTML < 0) number.style.color = "red";
    if (number.innerHTML == 0) number.style.color = "black";
});

// && and operator





