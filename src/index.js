import './css/main.css';
import './css/efx.css';
import './css/modal.css';
import GameView from './views/game';
import playSound from './audio/audio';

let showEnemies = false;
let transitionsEnabled = true;
const app = new GameView();
const menuNode = document.querySelector('#MenuContainer');
const wholeBoard = document.querySelector('#WholeBoard');
const showEnemiesBtn = document.querySelector('#ShowAll');
const transitionsBtn = document.querySelector('#Transitions');
const startGameBtn = document.querySelector('#StartGame');

showEnemiesBtn.addEventListener('click', () => {
  playSound('menu');
  showEnemies = !showEnemies;
  const color = showEnemies ? 'red' : 'grey';
  showEnemiesBtn.innerHTML = `Reveal Enemies <span class="text-${color}">(${showEnemies})</span>`;
});

transitionsBtn.addEventListener('click', () => {
  playSound('menu');
  transitionsEnabled = !transitionsEnabled;
  const color = transitionsEnabled ? 'grey' : 'red';
  transitionsBtn.innerHTML = `Enable Transitions <span class="text-${color}">(${transitionsEnabled})</span>`;
});

startGameBtn.addEventListener('click', () => {
  playSound('menu');
  menuNode.classList.toggle('hide');
  wholeBoard.classList.toggle('hide');
  app.run(showEnemies, transitionsEnabled);
});
