let gamenumber = 25;
let a = parseInt(prompt("Guess the number"));

while (a !== gamenumber) {
   a = parseInt(prompt("You guessed the wrong number. Guess again")); //in prompt we always get value in string
}

console.log("You got the correct number!");
