// create variables from HTML file
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timer = document.querySelector('#time-left')
const score = document.querySelector('#score')
const passingScore = 25

let result = 0
let hitPosition
let currentTime = 30
let timerID = null

//create a function to randomize location of mole
function randomSquare() {
    //use forEach method to get the mole from the class
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    //use Math.floor to assign a random location for the mole
    let randomSquare = squares[Math.floor(Math.random()*9)]
    // manipulate class by adding the mole class to reflect in the grid
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

//create function for sound
function playHitSound() {
    const hitSound = document.getElementById('hit-sound');
    //use .play to playback a certain media file
    hitSound.play();
  }  

//create a function to add a point when hitting the mole
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            //display score
            score.textContent = result
            //clear out hitPosition and set to null
            hitPosition = null
            //add sound
            playHitSound()
        }
    })
})

//create function to have the mole move in a set time
function moveMole(){
    //time the mole move every ms
    timerID = setInterval(randomSquare, 750)
}

//call the function moveMole
moveMole()

//create a function for timer
function countDown () {
    currentTime--
    timer.textContent = currentTime
    if (currentTime === 0){
        clearInterval(countdownTimerId)
        clearInterval(timerID)
        if (result >= passingScore) {
            alert('Congratulations you saved the day! your final score is' + ' ' + result)
        } else {
            alert('Try again! Finn got away :(')
        }
    }
}

//add restart function
const restartButton = document.getElementById('restart-button');

restartButton.addEventListener('click', function() {
  restartGame
});


function restartGame() {
    // Reset game variables
    result = 0;
    currentTime = 30;
    
    // Reset score and timer display
    score.textContent = result;
    timer.textContent = currentTime;
    
    // Clear current timer when button is clicked
    clearInterval(countdownTimerId);
    clearInterval(timerID);
    
    // Call the function moveMole again
    moveMole();
    countdownTimerId = setInterval(countDown, 1000);
  }
  
  restartButton.addEventListener('click', function() {
    restartGame();
  });

//create a function to pause the game
function pauseGame() {
    clearInterval(countdownTimerId);
    clearInterval(timerID)
}

const pauseButton = document.getElementById('pause-button');
pauseButton.addEventListener('click',pauseGame)
  

let countdownTimerId = setInterval(countDown, 1000)

//add background music
let backgroundMusic = document.getElementById("backgroundMusic");

// Get the container element
const gifContainer = document.getElementById('gif-container');

// Create an img element
const gifImage = document.createElement('img');

// Set the src attribute to the path of the GIF image
gifImage.src = 'adventure-time-finn-and-jake.gif';

// Append the img element to the container element
gifContainer.appendChild(gifImage);

