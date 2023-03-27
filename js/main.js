// cached elements
const gameComponents = document.querySelectorAll('#game-component')
const messageLbl = document.querySelector('.sub-text')

// global variables
let playerChoice = ''
let answerInt = 0
let currentAnswer = 'bop-it'
let timerCountdown = 3000
let isGameOver = false
let startingTime = 3000
let remainingTime = 0
let timerID = null


gameComponents.forEach(function(component) {
    component.addEventListener('click',componentClicked)
})

function componentClicked(event) {
    console.log(event.target.innerHTML + ' clicked')
    playerChoice = event.target.getAttribute('class')
    startingTime -= 100
    clearInterval(timerID)
    if (playerChoice === currentAnswer) {
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
    }
}

function subtractTime () {
    remainingTime -= 10
    console.log(remainingTime)
    if (remainingTime === 0) {
        console.log('game over')
        messageLbl.innerHTML = 'Game Over!'
        isGameOver = true
        clearInterval(timerID)
    }
}

function getRandomAnswer(){
    answerInt = Math.floor(Math.random() * gameComponents.length)
    console.log(answerInt)
    currentAnswer = gameComponents[answerInt].getAttribute('class')
    messageLbl.innerHTML = currentAnswer
}