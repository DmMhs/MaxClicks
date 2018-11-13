// import {model} from './model.js';
const model = require('./model.js');

document.getElementById('max-clicks').innerHTML = model.maxClicks;
document.getElementById('current-clicks').innerHTML = model.curClicks;
document.getElementById('timer-count').innerHTML = model.timer;
