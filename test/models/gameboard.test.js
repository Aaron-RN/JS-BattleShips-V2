import Ship from '../../src/models/ship';
import GameBoard from '../../src/models/gameboard';

const size = 10;
const gameBoard = new GameBoard(size);
//placeShip(ship, x, y, direction)

describe('#Gameboard', () => {
  test('places a ship', () => {
//    gameBoard.placeShip();
    expect(gameBoard.getBoard()).toHaveLength(size);
  });
});