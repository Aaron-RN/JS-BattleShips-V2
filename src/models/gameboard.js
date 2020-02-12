import GameBoardView from '../views/gameboard';

const GameBoard = (boardNode, size) => {
  // the this in this view I don't think it works since this is a factory function and not a class method...
  // so essentially I would just turn this whole thing into a class as well...
  const view = new GameBoardView(this, boardNode);
  //  const board = Array(size).fill(Array(size).fill())
  //    .map(row => row.map(cell => {
  //      return { shipId: null, fired: false }
  //    }));
  const board = (() => {
    const result = [];
    for (let y = 0; y < size; y += 1) {
      for (let x = 0; x < size; x += 1) {
        if (!result[y]) { result[y] = []; }
        result[y][x] = { shipId: null, hit: false, node: view.newCell(y, x) };
      }
    }
    console.log(result);
    return result;
  })();

  const ships = [];
  const getBoard = () => board;
  const placeShip = (ship, x, y, direction) => {
    if (x > size - 1) { return false; }
    if (y > size - 1) { return false; }
    if (ship.lenght > size) { return false; }

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
    if (finalX > size - 1 || finalX < 0) { return false; }
    if (finalY > size - 1 || finalY < 0) { return false; }

    // Check the board for already placed ships
    const { startX, finishX } = x < finalX ? { startX: x, finishX: finalX } : { startX: finalX, finishX: x };
    const { startY, finishY } = y < finalY ? { startY: y, finishY: finalY } : { startY: finalY, finishY: y };

    for (let i = startX; i <= finishX; i++) {
      for (let j = startY; j <= finishY; j++) {
        if (board[j][i].shipId) {
          return false;
        }
      }
    }

    // Place the ship in the board
    for (let i = startX; i <= finishX; i++) {
      for (let j = startY; j <= finishY; j++) {
        board[j][i].shipId = ship.id;
        view.placeShip(board[j][i]);
      }
    }

    return true;
  };

  const receiveAttack = (coords) => {
    console.log(`BOOM! at ${coords.x} ${coords.y}`);
  };

  return { getBoard, placeShip, receiveAttack };
};

export default GameBoard;
