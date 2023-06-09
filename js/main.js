// cached elements
const gameComponents = document.querySelectorAll('#game-component')
const messageLbl = document.querySelector('.sub-text')
const timerLbl = document.querySelector('.timer')
const highScoreLbl = document.querySelector('.high-score')
const playBtn = document.querySelector('.start-button')

// global variables
let playerChoice = ''
let answerInt = 0
let currentAnswer = 'bop-it'
let timerCountdown = 3000
let isGameOver = false
let startingTime = 5000
let highScore = 0
let currentScore = 0
let remainingTime = 0
let timerID = null

gameComponents.forEach(function(component) {
    component.addEventListener('click',componentClicked)
})

playBtn.addEventListener('click', function(event) {
    console.log('button clicked')
    restartGame()
})

function componentClicked(event) {
    console.log(event.target.innerHTML + ' clicked')
    playerChoice = event.target.getAttribute('class')
    startingTime -= 100
    clearInterval(timerID)
    if (playerChoice === currentAnswer) {
        currentScore += 1
        getRandomAnswer()
        remainingTime = startingTime
        timerID = setInterval(subtractTime,10)
        if (event.target.getAttribute('class') === 'bop-it') {
            // make sound, do animation
        } else if (event.target.getAttribute('class') === 'spin-it') {
            // make sound, do animation
        } else if (event.target.getAttribute('class') === 'flick-it') {
            // make sound, do animation
        } else if (event.target.getAttribute('class') === 'twist-it') {
            // make sound, do animation
        } else if (event.target.getAttribute('class') === 'pull-it') {
            // make sound, do animation
        }
    } else {
        clearInterval(timerID)
        messageLbl.innerHTML = 'Game Over!'
        console.log('wrong answer')
        checkHighScore()
    }
}

function subtractTime () {
    remainingTime -= 10
    console.log(remainingTime)
    if (remainingTime === 0) {
        console.log('game over')
        isGameOver = true
        clearInterval(timerID)
        checkHighScore()
    }
    timerLbl.innerHTML = 'Timer: ' + remainingTime
}

function getRandomAnswer(){
    answerInt = Math.floor(Math.random() * gameComponents.length)
    console.log(answerInt)
    currentAnswer = gameComponents[answerInt].getAttribute('class')
    messageLbl.innerHTML = currentAnswer
}

function checkHighScore() {
    if (currentScore > highScore) {
        highScore = currentScore
        highScoreLbl.innerHTML = 'Highscore: ' + highScore
        messageLbl.innerHTML = 'New Highscore!'
    } else {
        messageLbl.innerHTML = 'Game Over, Try again!'
    }
}

function restartGame() {
    playerChoice = ''
    answerInt = 0
    currentAnswer = 'bop-it'
    timerCountdown = 3000
    isGameOver = false
    startingTime = 5000
    highScore = 0
    currentScore = 0
    remainingTime = 0
    timerID = null
    messageLbl.innerHTML = 'Bop it to begin!'
}