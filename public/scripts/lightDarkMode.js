'use strict';

// Add description here
const clickModeButtonLight = document.querySelector('#modeButtonLight');
const clickModeButtonDark = document.querySelector('#modeButtonLight');

clickModeButtonLight.addEventListener('click', function (event) {
  event.preventDefault();

  inputs.forEach((input, index) => {
    placeholders[index].innerHTML = input.value;
  })
});

clickModeButtonDark.addEventListener('click', function (event) {
    event.preventDefault();
  
    inputs.forEach((input, index) => {
      placeholders[index].innerHTML = input.value;
    })
  });

