import Ship from './ship';

class Board {
  constructor(size) {
    this.size = size;
    this.board = Array(size).fill(Array(size).fill())
      .map(row => row.map(() => ({ shipId: null, hit: false })));
    this.ships = [5, 4, 3, 3, 2].map(i => Ship(i));
  }

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
        if (this.board[i][j].shipId) {
          return false;
        }
      }
    }

    // Place the ship in the board
    for (let i = startX; i <= finishX; i += 1) {
      for (let j = startY; j <= finishY; j += 1) {
        this.board[i][j].shipId = ship.id;
      }
    }

    return true;
  }

  receiveAttack(coords) {
    const cell = this.board[coords.x][coords.y];
    if (!cell.hit) {
      cell.hit = true;
      if (cell.shipId) {
        this.getShip(cell.shipId).hit();
        return 'hit';
      }
      return 'missed';
    }
    return null;
  }

  allShipsSunk() { return this.ships.every(ship => ship.isSunk()); }
}

export default Board;
