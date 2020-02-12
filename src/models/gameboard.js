const GameBoard = (size) => {
  const board = Array(size).fill(Array(size).fill()).map(row => row.map(cell => { return { shipId: null, fired: false }}));
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

    console.log('Start X: ' + startX + ' Finish X: ' + finishX);
    console.log('Start Y: ' + startY + ' Finish Y: ' + finishY);

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
      }
    }

    return true;
  };

  return { getBoard, placeShip };
};

export default GameBoard;
