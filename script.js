
let userInput = document.getElementById("userInput");
let btn = document.getElementById("button");
let hints = document.getElementById("hints");
let rest = document.getElementById("rest");
let targetNumber = Math.ceil(Math.random() * 100);
let classList = document.getElementsByClassName("userInput");
let prompts = document.getElementById("prompt");
let guest;
//classList[0].placeholder = targetNumber;
let num;

function program() {
    let goLower = ["Try a lower number", "That's not it, go lower", "Mhmm, I think you have to try a lower number"];
    userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            btn.click();

        }
    })

    btn.addEventListener("click", function () {
        hints.classList.add("hintsResized");
        num = userInput.value;
        
        if (isNaN(num)) {
            hints.innerHTML = "Please enter a number";
        } else if (num < 1 || num > 100) {
            hints.innerHTML = "Please enter a number between 1 and 100";
        } else if (num > targetNumber) {
            hints.innerHTML = goLower[Math.floor(Math.random() * goLower.length)];
        } else if (num < targetNumber) {
            hints.innerHTML = "Try a higher number ";
        } else {
            hints.innerHTML = `You guessed it correctly! The lucky number is ${num}`;
        }
        
    })
}

function backToDefault() {
    rest.addEventListener("click", function () {
        hints.innerHTML = "";
        targetNumber = Math.ceil(Math.random() * 100);
        classList[0].value = '';
        //classList[0].placeholder = targetNumber;
    })
};



prompts.addEventListener("click", function () {
    let num = Math.ceil(Math.random() * 100)
    let guess = prompt("guess a number between 1 and 100");

    do {
        if (isNaN(guess)) {
            alert("Please enter a number");
        } else if (guess < 1 || num > 100) {
            alert("Please enter a number between 1 and 100");
        } else if (guess > num) {
            alert("Try going lower");
        } else {
            alert("A bit higher");
        }
        guess = prompt("guess a number between 1 and 100 " + num);
    }
    while (guess != num) {

    }
    alert("You guessed it correctly! The lucky number is " + num);
})

program();
backToDefault();
