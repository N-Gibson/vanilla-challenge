const studyButton = document.getElementById('study-button');
const meditateButton = document.getElementById('meditate-button');
const exerciseButton = document.getElementById('exercise-button');
const startButton = document.getElementById('start-button');
const goal = document.getElementById('goal');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

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
    
  } else {
    
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