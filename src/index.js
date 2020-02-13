import GameBoard from './models/gameboard';
import GameBoardView from './views/gameboard';
import GameLogic from './models/gamelogic';

const mainBoard = document.querySelector('#GameBoard');

const BattleShips = new GameLogic();
