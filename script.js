const words = ["hello", "shery", "harsh", "apple",
    "banananana", "loop", "blue apple",
    "Array", "pink apple", "Finfluencer",
]

let currentword
let score = 0
let time = 20
let isplaying = false


const wordDisplay = document.querySelector('#word-display');
const wordInput = document.querySelector('#word-input');
const scoredisplay = document.querySelector('#score');
const timerDisplay = document.querySelector('#timer');

function init() {
    showNewWord()
    wordInput.addEventListener('input', checkInput);
    setInterval(countdowm, 1000)
    setInterval(checkStatus, 50);
}

function showNewWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentword = words[randomIndex];
    wordDisplay.innerText = currentword
    wordInput.value = ""
}

function checkInput() {
    if (wordInput.value === currentword) {
        score++;
        scoredisplay.innerText = `Score:${score}`;
        showNewWord()
        time = 30;
    }
}

function countdowm() {
    if (time > 0) {
        time--
    } else if (time === 0) {
        isplaying = false
    }
    timerDisplay.innerText = `Time:${time}s`
}

function checkStatus() {
    if (!isplaying && time === 0) {
        wordDisplay.innerText = `game over`
    }
}
init()

