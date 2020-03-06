import Game from '../models/game';
import playSound from '../audio/audio';

class GameView {
  constructor(size = 10) {
    this.size = size;
    this.game = new Game('You', 'Enemy', size);
    this.game.player1.targetBoard.placeAllShips();
    this.game.player2.targetBoard.placeAllShips();
    this.playerBoardNode = document.getElementById('PlayerBoard');
    this.enemyBoardNode = document.getElementById('EnemyBoard');
    this.enemyMoves = [...Array(this.size ** 2).keys()];
    this.initHeader();
  }

  run() {
    GameView.renderBoard(this.playerBoardNode, this.game.player2.targetBoard.board);
    GameView.renderBoard(this.enemyBoardNode, this.game.player1.targetBoard.board, true);

    this.enemyBoardNode.childNodes.forEach(cell => {
      cell.addEventListener('click', () => {
        if (!this.game.over) {
          const playerResult = this.playerPlay(cell);
          if (playerResult === 'missed') {
            let enemyResult = null;
            do {
              enemyResult = this.enemyPlay();
            } while (enemyResult === 'hit' && !this.game.over);
          }

          if (this.game.over) {
            if (this.game.winner.name === 'You') this.gameOver('Congratulations, you win!');
            else {
              this.gameOver('Uh oh, the Enemy wins!');
            }
          }
        }
      });
    });
  }

  playerPlay(cell) {
    const result = this.game.play(cell.dataset);
    if (result) { 
      playSound('fire');
      cell.classList.add(result); 
    }

    return result;
  }

  enemyPlay() {
    const move = this.enemyMoves.splice(Math.floor(Math.random() * this.enemyMoves.length), 1)[0];
    const coords = { x: Math.floor(move / this.size), y: move % this.size };
    const result = this.game.play(coords);
    const cell = this.playerBoardNode
      .querySelector(`[data-x="${coords.x}"][data-y="${coords.y}"]`);
    cell.classList.add(result);

    return result;
  }

  static renderBoard(boardNode, board, enemy = false) {
    board.forEach((row, i) => {
      row.forEach((cell, j) => {
        const cellNode = document.createElement('div');
        cellNode.classList.add('cell');
        cellNode.setAttribute('data-x', i);
        cellNode.setAttribute('data-y', j);
        cellNode.textContent=i+j;
        if (!enemy && board[i][j].shipId) {
          cellNode.classList.add('ship');
        }
        boardNode.appendChild(cellNode);
      });
    });
  }

  initHeader() {
    const headerNode = document.getElementById('header');
    this.messageContainer = document.createElement('div');
    this.messageContainer.classList.toggle('hidden');
    this.message = document.createElement('p');
    const button = document.createElement('button');
    button.innerHTML = 'Play again?';
    button.addEventListener('click', () => { window.location.reload(); });
    this.messageContainer.appendChild(this.message);
    this.messageContainer.appendChild(button);

    headerNode.appendChild(this.messageContainer);
  }

  gameOver(message) {
    this.message.innerHTML = message;
    this.messageContainer.classList.toggle('hidden');
  }
}

export default GameView;
