import GameBoard from './gameboard';
import GameBoardView from '../views/gameboard';
import GameLogicView from '../views/gamelogic';

class GameLogic {
  constructor(size = 10) {
    this.size = size;
    this.gameOver = false;
    this.whosTurn = 'Player';
    this.enemyMoves = [...Array(this.size ** 2).keys()];
  }

  run() {
    this.playerBoard = new GameBoard(this.size, true);
    this.playerView = new GameBoardView(this, this.playerBoard, '#PlayerBoard');
    this.playerBoard.placeAllShips();
    this.enemyBoard = new GameBoard(this.size);
    this.enemyView = new GameBoardView(this, this.enemyBoard, '#EnemyBoard');
    this.enemyBoard.placeAllShips();
    this.view = new GameLogicView('#header');
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

    this.playerView.attackBoard(randX, randY);
  }
}

export default GameLogic;
