import './css/main.css';
import './css/modal.css';
import GameView from './views/game';

let showEnemies = false;
let transitionsEnabled = true;
const app = new GameView();
const menuNode = document.querySelector('#MenuContainer');
const wholeBoard = document.querySelector('#WholeBoard');
const showEnemiesBtn = document.querySelector('#ShowAll');
const transitionsBtn = document.querySelector('#Transitions');
const startGameBtn = document.querySelector('#StartGame');

showEnemiesBtn.addEventListener( 'click', () => {
  showEnemies = !showEnemies;
  const color = showEnemies? 'red' : 'grey';
  showEnemiesBtn.innerHTML = `Reveal Enemies <span class="text-${color}">(${showEnemies})</span>`;
});

transitionsBtn.addEventListener( 'click', () => {
  transitionsEnabled = !transitionsEnabled;
  const color = transitionsEnabled? 'grey' : 'red';
  transitionsBtn.innerHTML = `Enable Transitions <span class="text-${color}">(${transitionsEnabled})</span>`;
});

startGameBtn.addEventListener( 'click', () => {
  menuNode.classList.toggle('hide');
  wholeBoard.classList.toggle('hide');
  app.run(showEnemies, transitionsEnabled)
} );
