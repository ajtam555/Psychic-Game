/**************************** VARIABLES **********************************/

// Initialize wins and guesses
var wins = 0;
var guesses = 12;

// Set empty array to insert already used letters
var usedLetter = [];

// Set empty array to insert correct letters
var guessStatus = [];

// Initialize counter to 0
var counter = 0;

// Set empty dashes array
var wordDash = [];

// Set the word that needs to be guessed
var word = ["z","a","c","k"];

/**************************** OBJECTS **********************************/

// Object that stores two words in an array (words for user games)

/*
var currentWord = {
"word" : ["dubai", "hello"]
};
*/

/***************************** FUNCTIONS ********************************/

// Function to check if new letter against letters stored in usedLetter array
function checkUsedLetter(check1) {

	var a = usedLetter.indexOf(check1);

	// New letter does NOT match letter already used
	if(a === -1) {
		
		// Check new letter against the word also
		checkWord(check1);

	}

	else if(a !== -1) {
		// If new letter matches letters stored in usedLetter array, do not decrement
		// Exit to repeat game
		
	}
}				

// Function to check if new letter matches any letters in the word
function checkWord(check2) {

	var b = word.indexOf(check2);

	// New letter does NOT match letters in the word
	if(b === -1) {
		
		// Push into usedLetter array
		usedLetter.push(check2);

		// Decrement guesses by 1
		guesses--;
	
	// New letter does correctly matches letters in the word
	} else if(b !== -1) {

		// Keep track of correctly guessed letters
		guessStatus.push(check2);
		
		// Replace dashes with correct letters
		//wordDash[b] = word[b];

		// Count number of times pushed array
		counter++;

		// Add to wins if counter number equals length number
		if(counter === word.length) {
			wins++;
			
			//document.getElementById('#image').src = "images/zackYoung.jpg";
		}
	}
}

// Function that adds dashes to HTML display (based on the length of the word)

/*
function dashes() {
	for(j=0; j<word.length; j++) {
		wordDash[j] = "_ ";
	}
}
*/	

// Function to end game

function endGame(check3) {
	if(guesses <= 0) {
		break;
	}
}

//**************************** HANGMAN GAME *******************************/

	// Enter game if any key is pressed
	document.onkeyup = function(event) {

	// Accept user input and store into letterGuess
	var letterGuess = event.key;

	// Call checkUsedLetter to check if new letter is already used
	// checkUsedLetter will call checkWord (only if letter not used)
	checkUsedLetter(letterGuess);

	var html = 

	"<p>Press any key to get started!</p>" +
	"<br>" +
	"<p><span>Wins: " + wins + "</span></p>" +
	"<br>" +
	"<p><span>Number of Guesses Remaining: " + guesses + "</span></p>" +
	"<br>" +
	"<p><span>Letters Already Guessed: " + usedLetter + "</span></p>";

	document.querySelector("#display").innerHTML = html;
	
	endGame(guesses);

	} 
