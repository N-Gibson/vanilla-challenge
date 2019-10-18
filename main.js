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

startButton.addEventListener('click', (e) => {
  let color;

  if(goal.value === '' || minutes.value === '' || seconds.value === '') {
    timerDiv.insertAdjacentHTML('afterbegin', '<p class="error">Please fill out all the inputs</p>')
  } else {
    // document.querySelector('.error').remove();
    form.style.display = 'none';
    timerDiv.insertAdjacentHTML('afterbegin', `<h2 class='timer-h2'>${goal.value}</h2><h3 class='timer-h3'>${minutes.value}:${seconds.value}</h3><button type="button" id="start-timer-button">START</button>`)
    let buttons = document.querySelectorAll('button');
    let colorPicker = Array.from(buttons).filter(button => button.classList[0] === 'category-buttons').map(button => button.dataset).forEach(button => {
      if(button.active === 'true') {
        color = button.color
      }
    })
  }
})

main.addEventListener('click', (e) => {
  let validMins = (Number(minutes.value)*60);
  let validSecs = Number(seconds.value);
  if(e.target.id === 'start-timer-button') {
    startTimer(validMins, validSecs, e)
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

function startTimer(minutes, seconds, e) {
  timeRemaining = e.target.parentElement.children[1]
  timeLeft = minutes + seconds;
  timerId = setInterval(countdown, 1000);
}

function countdown() {
  if (timeLeft === -1) {
    clearTimeout(timerId);
    alert('Times Up!');
  } else {
    timeRemaining.innerHTML = `${timeLeft}`;
    timeLeft--;
  }
}