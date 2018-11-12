import {model} from './model.js';

document.getElementById('max-clicks').innerHTML = model.maxClicks;
document.getElementById('current-clicks').innerHTML = model.curClicks;
document.getElementById('timer-count').innerHTML = model.timer;

window.addEventListener('resize', () => {
  location.reload();
});

