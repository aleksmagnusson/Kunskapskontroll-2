// Möjliga ord som dras slumpmässigt. Sätts in i en const.

const words = [
    "Afterwork", "Javascript",
    "Stockholm", "Studenter",
    "Programmering",
];

// Slumpfunktion som ger olika ord för varje omgång.
let randomWord = words[Math.floor(Math.random() * words.length)];
// Stora och små bokstäver.
let randomWordUpc = randomWord.toUpperCase();

// Livlinor --> "Lives: <number>"
Let lives = 5;

let rightInput = randomWord.length;
// Dolda versaler och gemener.
let hiddenCharacters = randomWord.split("");

let playGuess = [];

// Funktion for(let...).

function startPlay() {
    for (let i = 0; i < randomWord.length; i++) {
        hiddenCharacters[i] = "_";
    }
}

startPlay();

console.log(randomWord);

do {
    let guessInput = prompt(`${hiddenCharacters.join("")} \n Lives left: ${lives}\n Guesses made: ${playGuess}`);

    if (guessInput === null) {
        alert("You have canceled the game.");
        break;
    } 
}

guessInput = guessInput.toUpperCase();

(!guessInput.search(/[^a-zA-Z]+/) || guessInput.length !== 1) {
    alert("Enter only letters between A to Z.");
    continue;
} else if (randomWordUpc.includes(guessInput)) {
    for (let i = 0; i < randomWord.length; i++) {
        if (guessInput === randomWordUpc[i]) {
            hiddenCharacters[i] = randomWord[i];
            rightInput--;
        }
    }
} else {
lives--;
}

if (!randomWordUpc.includes(guessInput)) {
    playGuess.push(guessInput);
} if (lives == 0) {
    alert(`You have lost the game. The correct word was ${randomWord}`);
    else if (hiddenCharacters.join("") === randomWord) {
        alert("You have won, congratulations!");
    }
}
while (lives > 0 && rightInput > 0);