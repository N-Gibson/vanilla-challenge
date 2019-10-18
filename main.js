const studyButton = document.getElementById('study-button');
const meditateButton = document.getElementById('meditate-button');
const exerciseButton = document.getElementById('exercise-button');
const startButton = document.getElementById('start-button');
const goal = document.getElementById('goal');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const timerDiv = document.querySelector('.timer');
const form = document.querySelector('.form');
const main = document.querySelector('main');

studyButton.addEventListener('click', () => {
  toggleButtonStates(studyButton, 'study')
})

meditateButton.addEventListener('click', () => {
  toggleButtonStates(meditateButton, 'meditate')
})

exerciseButton.addEventListener('click', () => {
  toggleButtonStates(exerciseButton, 'exercise')
})

startButton.addEventListener('click', () => {
  if(goal.value === '' || minutes.value === '' || seconds.value === '') {
    timerDiv.insertAdjacentHTML('afterbegin', '<p class="error">Please fill out all the inputs</p>')
  } else {
    // document.querySelector('.error').remove();
    form.style.display = 'none';
    timerDiv.insertAdjacentHTML('afterbegin', `<h2>${goal.value}</h2><h3>${minutes.value}:${seconds.value}</h3><button type="button" id="start-timer-button">START</button>`)
  }
})

main.addEventListener('click', (e) => {
  if(e.target.id === 'start-timer-button') {
    startTimer(minutes.value, seconds.value)
  }
})

function toggleButtonStates(button, buttonName) {
  if (button.dataset.active === 'false') {
    button.dataset.active = 'true'
  } else {
    button.dataset.active = 'false'
  }
  
  button.dataset.active === 'true' ? button.classList.add(`${buttonName}-button-active`) : button.classList.remove(`${buttonName}-button-active`)
}

function startTimer(minutes, seconds) {
  let validMins = (Number(minutes)*60);
  let validSecs = Number(seconds);
  timer = document.getElementById('timer');
  timeLeft = validMins + validSecs;
  timerId = setInterval(countdown, 1000);
}

function countdown() {
  if (timeLeft === -1) {
    clearTimeout(timerId);
  } else {
    timerDiv.innerHTML = `${timeLeft}`;
    timeLeft--;
  }
}