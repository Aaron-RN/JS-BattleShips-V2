const ship = require('../ship.js');

describe('#init', () => {
  test('generates a new ship with a set length at a set position', () => {
    expect(ship.init(1, 2)).toEqual({});
  });
});