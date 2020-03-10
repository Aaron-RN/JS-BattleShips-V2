import Ship from './ship';

class Board {
  constructor(size = 10) {
    this.size = size;
    this.board = Array(size).fill(Array(size).fill())
      .map(row => row.map(() => ({ shipId: null, hit: false })));
    this.ships = [];
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

  allShipsSunk() {
    return this.ships.every(ship => ship.isSunk());
  }

  getShip(shipId) {
    return this.ships.find(ship => ship.id === shipId);
  }

  placeShip(ship, x, y, orientation) {
    if (x > this.size - 1) { return false; }
    if (y > this.size - 1) { return false; }
    if (ship.length > this.size) { return false; }
    if (!Board.getShipOrientations().includes(orientation)) { return false; }

    // Final coordinates of the ship
    const { finalX, finalY } = (() => {
      switch (orientation) {
        case 'U':
          return { finalX: x, finalY: y - (ship.length - 1) };
        case 'D':
          return { finalX: x, finalY: y + (ship.length - 1) };
        case 'L':
          return { finalX: x - (ship.length - 1), finalY: y };
        default:
          return { finalX: x + (ship.length - 1), finalY: y };
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
        this.ships.push(ship);
      }
    }

    return true;
  }

  placeAllShips() {
    Board.getDefaultShips().forEach(ship => {
      let placed = false;
      do {
        const randX = Math.floor(Math.random() * this.size);
        const randY = Math.floor(Math.random() * this.size);
        const randOrientation = Board.getShipOrientations()[Math.floor(Math.random() * 4)];
        placed = this.placeShip(ship, randX, randY, randOrientation);
      } while (!placed);
    });
  }

  static getShipOrientations() {
    return ['U', 'D', 'L', 'R'];
  }

  static getDefaultShips() {
//    return [5, 4, 3, 3, 2].map(size => Ship(size));
    return [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2].map(size => Ship(size));
  }
}

export default Board;
