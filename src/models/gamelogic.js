import GameBoard from './gameboard';

class GameLogic {
  constructor(size = 10) {
    this.size = size;
    this.gameOver = false;
    this.playerBoard = new GameBoard(this, '#PlayerBoard', size, true);
    this.enemyBoard = new GameBoard(this, '#EnemyBoard', size);
    this.whosTurn = 'Player';
  }
  
  setTurn(same = false) {
    if (!same){
      this.whosTurn = (this.whosTurn === 'Player' ? 'Enemy' : 'Player');
    }
    console.log(this.whosTurn);
    if(this.whosTurn === 'Enemy'){this.enemyFire()};
  }
  
  isGameOver() {
    if (this.playerBoard.allShipsSunk() || this.enemyBoard.allShipsSunk()){
      this.gameOver = true;
      console.log(this.whosTurn + ' Won');
    }
  }
  
  enemyFire() {
    const randX = Math.floor(Math.random() * this.size);
    const randY = Math.floor(Math.random() * this.size);
    console.log(randX);
    console.log(randY);
    
    this.playerBoard.receiveAttack({x: randX, y: randY});
  }
}

export default GameLogic;