import Ship from '../../src/models/ship';
import GameBoard from '../../src/models/gameboard';

const size = 10;
const gameBoard = new GameBoard(size);

describe('#Gameboard', () => {
  test('gameboard successfully created', () => {
    expect(gameBoard.getBoard()).toHaveLength(size);
  });
  
  test('places a ship', () => {
    gameBoard.placeShip(new Ship(2), 0, 0, 'R');
    expect(gameBoard.getBoard()[0][0]).toMatchObject(
      {hit: false}, {shipID: null}
    );
  });
  
  test('can hit a ship', () => {
    const ship = new Ship(2);
    gameBoard.ships.push(ship);
    gameBoard.placeShip(ship, 9, 9, 'L');
    expect(gameBoard.receiveAttack({x:9,y:9})).toEqual('hit');
  });
  
  test('can miss a ship', () => {
    const ship = new Ship(2);
    gameBoard.ships.push(ship);
    gameBoard.placeShip(ship, 9, 9, 'L');
    expect(gameBoard.receiveAttack({x:0,y:0})).toEqual('missed');
  });   
});