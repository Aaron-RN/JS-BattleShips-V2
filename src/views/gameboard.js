import '../css/main.css';

class GameBoardView {
  constructor(model, selector) {
    this.model = model;
    this.boardNode = document.querySelector(selector);
  }

  newCell(y, x) {
    const cellNode = document.createElement('div');
    cellNode.classList.add('cell');
    cellNode.setAttribute('data-x', x);
    cellNode.setAttribute('data-y', y);
    cellNode.addEventListener('click', () => {
      cellNode.textContent = `${x} & ${y}`;
      this.model.receiveAttack({x, y});
    });
    this.boardNode.appendChild(cellNode);

    return cellNode;
  }

  placeShip(ship) {
    ship.node.textContent = ship.shipId;
  }
}

export default GameBoardView;
