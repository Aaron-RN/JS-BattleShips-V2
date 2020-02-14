import Game from '../../src/models/game';
import Ship from '../../src/models/ship';

let game = null;
beforeEach(() => {
  game = new Game('Player 1', 'Player 2', 2);
  game.player1.targetBoard.placeShip(Ship(1), 0, 0, 'D');
  game.player1.targetBoard.placeShip(Ship(1), 1, 1, 'U');
  game.player2.targetBoard.placeShip(Ship(1), 0, 1, 'D');
  game.player2.targetBoard.placeShip(Ship(1), 1, 0, 'U');
});

describe('#constructor', () => {
  test('it sets the initial game state', () => {
    expect(game.over).toBe(false);
    expect(game.winner).toBe(null);
    expect(game.currentPlayer.name).toBe('Player 1');
  });
});

describe('#play', () => {
  test('it changes the current player after a missed shot', () => {
    const result = game.play({ x: 0, y: 1 });
    expect(result).toBe('missed');
    expect(game.currentPlayer.name).toBe('Player 2');
  });

  test('it does not change the current player after a hit', () => {
    const result = game.play({ x: 0, y: 0 });
    expect(result).toBe('hit');
    expect(game.currentPlayer.name).toBe('Player 1');
  });

  test('it sets over to false if a play does not finish the game', () => {
    game.play({ x: 0, y: 0 });
    expect(game.over).toBe(false);
  });

  test('it sets over to true and the winner if a play finishes the game', () => {
    game.play({ x: 0, y: 0 });
    game.play({ x: 1, y: 1 });
    expect(game.over).toBe(true);
    expect(game.winner).toEqual(game.player1);
  });
});
