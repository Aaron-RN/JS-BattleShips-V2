import Ship from '../../src/models/ship';
import Board from '../../src/models/board';

let board = null;
beforeEach(() => {
  board = new Board();
});

describe('#constructor', () => {
  test('it creates a board of size 10x10', () => {
    expect(board.board.flat()).toHaveLength(100);
  });

  test('it fills the board with the expected default values', () => {
    expect(board.board.flat()
      .every(cell => cell.shipId === null && cell.hit === false))
      .toBe(true);
  });

  test('it creats an empty ships list', () => {
    expect(board.ships).toEqual([]);
  });
});

describe('#placeShip', () => {
  test('it correctly places a ship', () => {
    const ship = Ship(2);
    board.placeShip(ship, 0, 0, 'R');

    expect(board.ships).toContain(ship);
    expect(board.board[0][0]).toMatchObject(
      { hit: false, shipId: ship.id },
    );
    expect(board.board[1][0]).toMatchObject(
      { hit: false, shipId: ship.id },
    );
  });

  test('it does not allow to place a ship out of bounds', () => {
    const ship = Ship(2);

    expect(board.placeShip(ship, 0, 0, 'U')).toBe(false);
    expect(board.ships).toEqual([]);
  });

  test('it does not allow to place overlapped ships', () => {
    const ship1 = Ship(3);
    const ship2 = Ship(5);
    board.placeShip(ship1, 0, 0, 'R');

    expect(board.placeShip(ship2, 2, 0, 'R')).toBe(false);
    expect(board.ships).not.toContain(ship2);
  });
});

describe('#receiveAttack', () => {
  test('it hits a ship', () => {
    const ship = Ship(3);
    board.placeShip(ship, 1, 1, 'D');

    expect(board.receiveAttack({ x: 1, y: 2 })).toEqual('hit');
    expect(board.board[1][2].hit).toBe(true);
  });

  test('it misses a ship', () => {
    const ship = Ship(3);
    board.placeShip(ship, 1, 1, 'D');

    expect(board.receiveAttack({ x: 5, y: 5 })).toEqual('missed');
    expect(board.board[5][5].hit).toBe(true);
  });

  test('it sinks a ship', () => {
    const ship = Ship(3);
    board.placeShip(ship, 1, 1, 'D');
    board.receiveAttack({ x: 1, y: 1 });
    board.receiveAttack({ x: 1, y: 2 });
    board.receiveAttack({ x: 1, y: 3 });
    expect(ship.isSunk()).toBe(true);
  });
});

describe('#allShipsSunk', () => {
  beforeEach(() => {
    board.placeShip(Ship(1), 1, 1, 'D');
    board.placeShip(Ship(1), 5, 5, 'D');
    board.receiveAttack({ x: 1, y: 1 });
  });

  test('it returns false if not all ships have been sunk', () => {
    expect(board.allShipsSunk()).toBe(false);
  });

  test('it returns true if all ships have been sunk', () => {
    board.receiveAttack({ x: 5, y: 5 });
    expect(board.allShipsSunk()).toBe(true);
  });
});
