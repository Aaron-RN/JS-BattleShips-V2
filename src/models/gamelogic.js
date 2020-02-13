import GameBoard from './gameboard';
import GameLogicView from '../views/gamelogic';

class GameLogic {
  constructor(size = 10) {
    this.size = size;
    this.gameOver = false;
    this.playerBoard = new GameBoard(this, '#PlayerBoard', size, true);
    this.enemyBoard = new GameBoard(this, '#EnemyBoard', size);
    this.whosTurn = 'Player';
    this.view = new GameLogicView('#header');
    this.enemyMoves = [...Array(size ** 2).keys()];
  }

  setTurn(same = false) {
    if (!same && !this.gameOver){
      this.whosTurn = (this.whosTurn === 'Player' ? 'Enemy' : 'Player');
    }
    console.log(this.whosTurn);
    if(this.whosTurn === 'Enemy'){this.enemyFire()};
  }

  isGameOver() {
    if (this.playerBoard.allShipsSunk() || this.enemyBoard.allShipsSunk()){
      this.gameOver = true;
      this.view.gameOver(this.whosTurn + ' Won!');
    }
  }

  enemyFire() {
    const move = this.enemyMoves.splice(Math.floor(Math.random() * this.enemyMoves.length), 1)[0];
    const randX = Math.floor(move / this.size);
    const randY = move % this.size;
    console.log(randX);
    console.log(randY);

    this.playerBoard.receiveAttack({x: randX, y: randY});
  }
}

export default GameLogic;
