import Game from '../models/game';

class GameView {
  constructor(size = 10) {
    this.size = size;
    this.game = new Game('Player', 'Enemy', size);
    this.game.player1.targetBoard.placeAllShips();
    this.game.player2.targetBoard.placeAllShips();
    this.playerBoardNode = document.getElementById('PlayerBoard');
    this.enemyBoardNode = document.getElementById('EnemyBoard');
    this.enemyMoves = [...Array(this.size ** 2).keys()];
  }

  run() {
    GameView.renderBoard(this.playerBoardNode, this.game.player2.targetBoard.board);
    GameView.renderBoard(this.enemyBoardNode, this.game.player1.targetBoard.board, true);

    this.enemyBoardNode.childNodes.forEach(cell => {
      cell.addEventListener('click', () => {
        if (!this.game.gameOver) {
          const playerPlay = cell.dataset;
          const attackResult = this.game.play(playerPlay);
          if (attackResult) {
            cell.classList.add(attackResult);

            if (attackResult === 'missed') {
              let enemyAttackResult = null;
              do {
                const enemyPlay = this.generateEnemyPlay();
                enemyAttackResult = this.game.play(enemyPlay);
                this.playerBoardNode
                  .querySelector(`[data-x="${enemyPlay.x}"][data-y="${enemyPlay.y}"]`)
                  .classList
                  .add(enemyAttackResult);
              } while (enemyAttackResult === 'hit');
            }
          }
        }
      });
    });
  }

  generateEnemyPlay() {
    const move = this.enemyMoves.splice(Math.floor(Math.random() * this.enemyMoves.length), 1)[0];
    return { x: Math.floor(move / this.size), y: move % this.size };
  }

  static renderBoard(boardNode, board, enemy = false) {
    board.forEach((row, i) => {
      row.forEach((cell, j) => {
        const cellNode = document.createElement('div');
        cellNode.classList.add('cell');
        cellNode.setAttribute('data-x', i);
        cellNode.setAttribute('data-y', j);
        if (!enemy && board[i][j].shipId) {
          cellNode.classList.add('ship');
        }
        boardNode.appendChild(cellNode);
      });
    });
  }
}

export default GameView;
