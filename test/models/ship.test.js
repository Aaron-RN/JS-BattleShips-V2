import ship from '../../src/models/ship';

describe('#init', () => {
  test('generates a ship object with built in functions', () => {
    expect(ship(1)).toMatchObject({ hit: false, isSunk: false, maxHP: 1 });
  });
});
