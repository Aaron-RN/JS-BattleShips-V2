import GameBoard from './models/gameboard';
import GameBoardView from './views/gameboard';

const mainBoard = document.querySelector('#GameBoard');

const boardOne = GameBoard('#PlayerOneBoard', 10);


boardOne.placeShip({ id: 1, length: 4 }, 0, 0, 'D');
boardOne.placeShip({ id: 2, length: 4 }, 4, 4, 'U');
