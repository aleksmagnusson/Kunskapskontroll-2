const wordsInGame = [
    "Programmering",
    "Stockholm",
    "Studenter",
    "Javascript",
    "Afterwork"];

let randomWord = wordsInGame[Math.floor(Math.random() * wordsInGame.length)];

let randomWordLowerCase = randomWord.toLowerCase();

let lives = 5;

let Lettersleft = randomWord.length;

// Görs till en array med hjälp av .split(); .
let hiddenLetters = randomWord.split(" ");

const inpurGuess = [];

function playGame() {
    for (let i = 0; i < randomWord.length; i++) {
        hiddenLetters[i] = "_";
    }
}

// Start, vinst/forlust och avbryt spel.
playGame();
do {
    let guessInput = prompt(`${hiddenLetters.join(" ")}
    \n Lives left: ${lives}\n Guesses made: ${inpurGuess}`);

    if (guessInput === null) {
        alert("You have canceled the game");
        break;
    }

    guessInput = guessInput.toLowerCase();
    // Om man skriver ogiltikt tecken kommer datorn säga ifrån att man enbart får använda A-Z.
    if (!guessInput.search(/[^a-zA-Z]+/) || guessInput.length !== 1) {
        alert("Please only use a singel letters between A to Z");
        continue;

    
    } else if (randomWordLowerCase.includes(guessInput)) {
        for (let i = 0; i < randomWord.length; i++) {
            
            if (guessInput === randomWordLowerCase[i]) {
                hiddenLetters[i] = randomWord[i];
                Lettersleft--;
            }
        }
    } else {
    // Antal liv minskar.
        lives--;
    }

    if (!randomWordLowerCase.includes(guessInput)) {
        inpurGuess.push(guessInput);
    }
    // Vid vinst och förlust ger programmet meddelande vid slutet av spelet då man vunnnit eller förlorat.
    if (lives === 0) {
        alert(`You have lost! The correct word was ${randomWord}`);

    } else if (hiddenLetters.join("") === randomWord) {
        alert("You have won, congratulations!")
    }
}
while (lives > 0 && Lettersleft > 0);
