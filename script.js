
let userInput = document.getElementById("userInput");
let btn = document.getElementById("button");
let hints = document.getElementById("hints");
let rest = document.getElementById("rest");
let targetNumber = Math.ceil(Math.random() * 100);
let classList = document.getElementsByClassName("userInput");
let prompts = document.getElementById("prompt");
let guest;
let counter = 0;
//classList[0].placeholder = targetNumber;
let num;

//most of the material and fun happens in our program function
function program() {
    //use an array to generate a random hint when the user guess's a lower number or higher number
    let goLower = ["Try a lower number", "That's not it, go lower", "Mhmm, I think you have to try a lower number", "Your guessed a higher number", "Good guess, but maybe a lower number?", "Nope, hint: it's a lower number"];
    let goHigher = ["Oof, nice try but try higher integer", "Good guess, but thats not it. Go higher", "Your guess is as good as mine, go higher", "No, try a higher value", "I'm thinking higher integer"];
    
    //Create a function that lets user use the enter key for submiting value
    userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault(); //prevent page from loading
            btn.click();

        }
    })

    //When Check button is click 
    btn.addEventListener("click", function () {
        //add our css class to display hints - resize the width to 100%
        hints.classList.add("hintsResized");
        num = userInput.value;
        
        if (isNaN(num)) { //validate for a number value
            hints.innerHTML = "Please enter a number";
        } else if (num < 1 || num > 100) { //limit user input values
            hints.innerHTML = "Please enter a number between 1 and 100";
        } else if (num > targetNumber) {
            //generate our array from above for a variety of responses when user guess is a higher number higer
            hints.innerHTML = goLower[Math.floor(Math.random() * goLower.length)];
            counter++;
        } else if (num < targetNumber) {
            //generate our array from above for a variety of responses when user guess is a lower number
            hints.innerHTML = goHigher[Math.floor(Math.random() * goHigher.length)];
            counter++;
        } else {
            counter++
            if(counter == 1){ 
                hints.innerHTML = `You guessed it correctly! It only took you ${counter} try`
            }
            else{
                hints.innerHTML = `You guessed it correctly! It only took you ${counter} tries`
            }
        }
        
    })
}

//create a function that reset's values and generate a new random number
function backToDefault() {
    rest.addEventListener("click", function () {
        hints.innerHTML = "";
        counter = 0;
        targetNumber = Math.ceil(Math.random() * 100);
        classList[0].value = '';
        //classList[0].placeholder = targetNumber;
    })
};


//old fashioned prompt's
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
        guess = prompt("guess a number between 1 and 100 ");
    }
    while (guess != num) {

    }
    alert("You guessed it correctly! The lucky number is " + num);
})

program();
backToDefault();
