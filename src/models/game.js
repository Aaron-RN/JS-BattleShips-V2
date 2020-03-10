import Board from './board';

class Game {
  constructor(player1Name, player2Name, size = 10) {
    this.player1 = { name: player1Name, targetBoard: new Board(size) };
    this.player2 = { name: player2Name, targetBoard: new Board(size) };
    this.turnsTaken = 1;
    this.over = false;
    this.cutscene = false;
    this.transitionsEnabled = true;
    this.winner = null;
    this.currentPlayer = this.player1;
  }

  play(coords) {
    if (!this.over) {
      const attackResult = this.currentPlayer.targetBoard.receiveAttack(coords);
      if (this.currentPlayer.targetBoard.allShipsSunk()) {
        this.over = true;
        this.winner = this.currentPlayer;
      } else if (attackResult === 'missed') {
        if (this.transitionsEnabled) {
          setTimeout(() => this.switchTurns(), 5000);
        } else { this.switchTurns(); }
      }

      return attackResult;
    }
    return null;
  }

  switchTurns() {
    this.currentPlayer = this.currentPlayer === this.player1
      ? this.player2
      : this.player1;
  }
}

export default Game;
