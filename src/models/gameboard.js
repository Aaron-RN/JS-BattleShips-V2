import Ship from './ship';
import GameBoardView from '../views/gameboard';

class GameBoard {
  constructor(gameLogic, boardNode, size, isPlayer = false) {
    this.isPlayer = isPlayer;
    this.size = size;
    this.gameLogic = gameLogic;
    this.view = new GameBoardView(this, boardNode);
    this.board = Array(size).fill(Array(size).fill())
      .map((row, i) => row.map((cell, j) => ({
        shipId: null,
        hit: false,
        node: this.view.newCell(j, i),
      })));
    this.ships = [5, 4, 3, 3, 2].map(i => Ship(i));
  }

  getBoard() { return this.board; }

  getShip(shipId) {
    return this.ships.find(ship => ship.id === shipId);
  }

  placeAllShips() {
    this.ships.forEach(ship => {
      let result = false;
      do {
        const randX = Math.floor(Math.random() * this.size);
        const randY = Math.floor(Math.random() * this.size);
        const randDirection = ['U', 'D', 'L', 'R'][Math.floor(Math.random() * 4)];
        result = this.placeShip(ship, randX, randY, randDirection);
      } while (!result);
    });
  }

  placeShip(ship, x, y, direction) {
    if (x > this.size - 1) { return false; }
    if (y > this.size - 1) { return false; }
    if (ship.length > this.size) { return false; }

    // Final coordinates of the ship
    const { finalX, finalY } = (() => {
      switch (direction) {
        case 'U':
          return { finalX: x, finalY: y - (ship.length - 1) };
        case 'D':
          return { finalX: x, finalY: y + (ship.length - 1) };
        case 'L':
          return { finalX: x - (ship.length - 1), finalY: y };
        case 'R':
          return { finalX: x + (ship.length - 1), finalY: y };
        default:
          throw new Error('Invalid direction');
      }
    })();

    // Check if final coordinates are out of bounds
    if (finalX > this.size - 1 || finalX < 0) { return false; }
    if (finalY > this.size - 1 || finalY < 0) { return false; }

    // Check the board for already placed ships
    const { startX, finishX } = x < finalX
      ? { startX: x, finishX: finalX }
      : { startX: finalX, finishX: x };
    const { startY, finishY } = y < finalY
      ? { startY: y, finishY: finalY }
      : { startY: finalY, finishY: y };

    for (let i = startX; i <= finishX; i += 1) {
      for (let j = startY; j <= finishY; j += 1) {
        if (this.board[j][i].shipId) {
          return false;
        }
      }
    }

    // Place the ship in the board
    for (let i = startX; i <= finishX; i += 1) {
      for (let j = startY; j <= finishY; j += 1) {
        this.board[j][i].shipId = ship.id;
        if (this.isPlayer) { GameBoardView.placeShip(this.board[j][i]); }
      }
    }

    return true;
  }

  receiveAttack(coords) {
    if (this.gameLogic.gameOver) { return; }
    const cell = this.board[coords.y][coords.x];
    if (!cell.hit) {
      cell.hit = true;
      if (cell.shipId) {
        this.getShip(cell.shipId).hit();
        this.gameLogic.isGameOver();
        GameBoardView.addEffects(cell, 'hit');
        this.gameLogic.setTurn(true);
      } else {
        this.gameLogic.setTurn();
        GameBoardView.addEffects(cell, 'missed');
      }
    }
  }

  allShipsSunk() { return this.ships.every(ship => ship.isSunk()); }
}

export default GameBoard;
