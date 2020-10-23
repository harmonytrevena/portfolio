'use strict';

window.addEventListener('DOMContentLoaded', function() {
  document.body.classList('light-theme');  
});

const btn = document.querySelector('.btn-toggle');

btn.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');  
});