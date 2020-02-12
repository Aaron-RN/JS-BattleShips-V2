import Ship from '../../src/models/ship';


test('a newly created ship is not sunk by default', () => {
  const ship = Ship(2);
  expect(ship.isSunk()).toBe(false);
});

test('a newly created ship is sunk after being hit enough times', () => {
  const ship = Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
