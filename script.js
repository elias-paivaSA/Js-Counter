
const number = document.getElementById("main-number");
const header = document.getElementById("header");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");

reset.addEventListener("click", (event) => {
    if (number.innerHTML !== 0) {
        number.innerHTML = 0;
        number.style.color = "black"
    };
    
});

increase.addEventListener("click", (event) => {
    if (number.innerHTML >= 0 || number.innerHTML < 0) {
        number.innerHTML++
        number.style.color = "purple"
    };
    
});

decrease.addEventListener("click", (event) => {
    if (number.innerHTML <= 0 || number.innerHTML > 0) {
        number.innerHTML--
        number.style.color = "red"
    };
    
    
});

// && and operator





