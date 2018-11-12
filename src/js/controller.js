import {model} from './model.js';

const start = document.getElementById('btn-start');
const go = document.getElementById('btn-go');
const burger = document.getElementsByClassName('fa-bars')[0];
const info = document.getElementsByClassName('fa-info-circle')[0];
const sidebar =  document.getElementsByClassName('sidebar')[0];
const infoSection = document.getElementsByClassName('info-section')[0];
const vol_enable = document.getElementById('vol');
const vol_disable = document.getElementById('mute');
const audio = document.getElementById('audio');
const reset = document.getElementById('reset');

start.addEventListener('click', () => {
  startCountdown();
});

go.addEventListener('click', ()=> {
  model.curClicks++;
  document.getElementById('current-clicks').innerHTML = model.curClicks;
  clickSound();
});

burger.addEventListener('click', () => {
  burger.classList.toggle('pressed');
  sidebar.classList.toggle('hidden');
  if (window.innerWidth < 922.1) {
    info.classList.toggle('index-lowered');
  }
});

info.addEventListener('click', () => {
  info.classList.toggle('pressed-info');
  infoSection.classList.toggle('hidden');
  if (window.innerWidth < 922.1) {
    burger.classList.toggle('index-lowered');
  }
});

reset.addEventListener('click', () => {
  const check = confirm('NOTE: after confirming RESET you will lose all your progress!');
  if (check === true) {
    localStorage.clear();
    location.reload();
  }
});

vol_enable.addEventListener('click', () => {
  vol_enable.classList.toggle('hidden');
  vol_disable.classList.toggle('hidden');
  audio.muted = true;
});

vol_disable.addEventListener('click', () => {
  vol_enable.classList.toggle('hidden');
  vol_disable.classList.toggle('hidden');
  audio.muted = false;
});

document.body.addEventListener('keyup', e => {
  if(!start.classList.contains('app--on-top') && e.keyCode === 32) {
    model.curClicks++;
    document.getElementById('current-clicks').innerHTML = model.curClicks;
    clickSound();
  }

  if(e.keyCode === 82) {
    burger.classList.toggle('pressed');
    sidebar.classList.toggle('hidden');
  }

  if(e.keyCode === 73) {
    info.classList.toggle('pressed-info');
    infoSection.classList.toggle('hidden');
  }

  if(e.keyCode === 86) {
    vol_enable.classList.toggle('hidden');
    vol_disable.classList.toggle('hidden');
    if (audio.muted) {
      audio.muted = false;
    } else {
      audio.muted = true;
    }
  }

  if(start.classList.contains('app--on-top') && e.keyCode === 13) {
    startCountdown();
  }
});

export function checkRank() {
  const rank = document.getElementById('current-rank');
  const rankImg = document.getElementById('rank-img');

  if (localStorage.maxClicksEver === undefined) {
    localStorage.setItem('maxClicksEver', 0);
  }
  if (localStorage.curLevel === undefined) {
    localStorage.setItem('curLevel', 0);
  }
  if (sessionStorage.maxClicks === undefined) {
    sessionStorage.setItem('maxClicks', 0);
  }

  rank.innerHTML = model.levels[localStorage.curLevel].rank;
  rankImg.setAttribute('src', `${model.levels[localStorage.curLevel].img}`);

  model.maxClicksEver = localStorage.maxClicksEver;
  document.getElementById('max-result').innerHTML = model.maxClicksEver;

  if(model.maxClicksEver >= 20) {
    localStorage.curLevel = 1;
    update();
    if(model.maxClicksEver >= 30) {
      localStorage.curLevel = 2;
      update();
      if(model.maxClicksEver >= 40) {
        localStorage.curLevel = 3;
        update();
        if(model.maxClicksEver >= 45) {
          localStorage.curLevel = 4;
          update();
          if(model.maxClicksEver >= 50) {
            localStorage.curLevel = 5;
            update();
            if(model.maxClicksEver >= 55) {
              localStorage.curLevel = 6;
              update();
              if(model.maxClicksEver >= 60) {
                localStorage.curLevel = 7;
                update();
                if(model.maxClicksEver >= 65) {
                  localStorage.curLevel = 8;
                  update();
                  if(model.maxClicksEver >= 70) {
                    localStorage.curLevel = 9;
                    update();
                    if(model.maxClicksEver >= 80) {
                      localStorage.curLevel = 10;
                      update();
                      if(model.maxClicksEver >= 90) {
                        localStorage.curLevel = 11;
                        update();
                        if(model.maxClicksEver >= 100) {
                          localStorage.curLevel = 12;
                          update();
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

//  TODO: REPLACE IF-CHECKS ABOVE with ->
// const curLevel = array.filter(function(level){
//   return localStorage.maxClicksEver > level.from && localStorage.maxClicksEver < level.to;
// });

function update() {
  const tr = document.getElementsByTagName('tr');
  const rank = document.getElementById('current-rank');
  const rankImg = document.getElementById('rank-img');

  rank.innerHTML = model.levels[localStorage.curLevel].rank;
  rankImg.setAttribute('src', `${model.levels[localStorage.curLevel].img}`);

  tr[tr.length - localStorage.curLevel - 1].classList.remove('sidebar__rank--unachived');
  tr[tr.length - localStorage.curLevel - 1].classList.add('sidebar__rank--current-level');
  tr[tr.length - localStorage.curLevel].classList.remove('sidebar__rank--current-level');
}

function clickSound() {
  audio.playbackRate = 1;
  audio.currentTime = 0;
  audio.play();
}

function startCountdown() {
  document.getElementById('btn-start').classList.remove('app--on-top');
  model.curClicks = 0;
  var timerId = setInterval(function () {
    if (model.timer !== 0) {
      model.timer += -1;
      document.getElementById('timer-count').innerHTML = model.timer;
    }
  }, 1000);

  setTimeout(function () {
    clearInterval(timerId);

    if (model.maxClicks < model.curClicks) {
      model.maxClicks = model.curClicks;
      document.getElementById('max-clicks').innerHTML = model.maxClicks;
    }

    if (localStorage.maxClicksEver < model.maxClicks) {
      localStorage.maxClicksEver = model.maxClicks;
      document.getElementById('max-clicks').innerHTML = model.maxClicks;
    }

    checkRank();

    model.timer = 10;
    model.curClicks = 0;
    document.getElementById('timer-count').innerHTML = model.timer;
    document.getElementById('current-clicks').innerHTML = model.curClicks;
    start.classList.add('app--on-top');

    btnUnactive();

  }, 11000);
}

function btnUnactive() {
  start.classList.add('unactive');
  go.classList.add('unactive');
  var timerId = setInterval(2000);
  setTimeout(function () {
    clearInterval(timerId);
    start.classList.remove('unactive');
    go.classList.remove('unactive');
  }, 3000);
}



