import GameBoard from './gameboard';
import GameLogicView from '../views/gamelogic';

class GameLogic {
  constructor(size = 10) {
    this.size = size;
    this.gameOver = false;
    this.whosTurn = 'Player';
    this.enemyMoves = [...Array(this.size ** 2).keys()];
  }

  run() {
    this.playerBoard = new GameBoard(this, '#PlayerBoard', this.size, true);
    this.playerBoard.placeAllShips();
    this.enemyBoard = new GameBoard(this, '#EnemyBoard', this.size);
    this.enemyBoard.placeAllShips();
    this.view = new GameLogicView('#header');
  }

  setTurn(same = false) {
    if (!same && !this.gameOver) {
      this.whosTurn = (this.whosTurn === 'Player' ? 'Enemy' : 'Player');
    }
    if (this.whosTurn === 'Enemy') { this.enemyFire(); }
  }

  isGameOver() {
    if (this.playerBoard.allShipsSunk() || this.enemyBoard.allShipsSunk()) {
      this.gameOver = true;
      this.view.gameOver(`${this.whosTurn} Won!`);
    }
  }

  enemyFire() {
    const move = this.enemyMoves.splice(Math.floor(Math.random() * this.enemyMoves.length), 1)[0];
    const randX = Math.floor(move / this.size);
    const randY = move % this.size;

    this.playerBoard.receiveAttack({ x: randX, y: randY });
  }
}

export default GameLogic;
