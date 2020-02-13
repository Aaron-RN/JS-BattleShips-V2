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
      const result = this.model.receiveAttack({ x, y });
      if (result) { cellNode.classList.add(result); }
    });
    this.boardNode.appendChild(cellNode);
    return cellNode;
  }

  placeShip(ship) {
    ship.node.textContent = ship.shipId;
  }
}

export default GameBoardView;
