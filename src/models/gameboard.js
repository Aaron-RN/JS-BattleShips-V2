import GameBoardView from '../views/gameboard';

class GameBoard {
  constructor(boardNode, size) {
    this.size = size;
    this.ships = [];
    this.view = new GameBoardView(this, boardNode);
    //  const board = Array(size).fill(Array(size).fill())
    //    .map(row => row.map(cell => {
    //      return { shipId: null, fired: false }
    //    }));
    this.board = (() => {
      const result = [];
      for (let y = 0; y < size; y += 1) {
        for (let x = 0; x < size; x += 1) {
          if (!result[y]) { result[y] = []; }
          result[y][x] = { shipId: null, hit: false, node: this.view.newCell(y, x) };
        }
      }
      console.log(result);
      return result;
    })();
  }

  getBoard() { return this.board; }

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
    const { startX, finishX } = x < finalX ? { startX: x, finishX: finalX } : { startX: finalX, finishX: x };
    const { startY, finishY } = y < finalY ? { startY: y, finishY: finalY } : { startY: finalY, finishY: y };

    for (let i = startX; i <= finishX; i++) {
      for (let j = startY; j <= finishY; j++) {
        if (this.board[j][i].shipId) {
          return false;
        }
      }
    }

    // Place the ship in the board
    for (let i = startX; i <= finishX; i++) {
      for (let j = startY; j <= finishY; j++) {
        this.board[j][i].shipId = ship.id;
        this.view.placeShip(this.board[j][i]);
      }
    }

    return true;
  }

  receiveAttack(coords) {
    return console.log(`BOOM! at ${coords.x} ${coords.y}`);
  }
}

export default GameBoard;
