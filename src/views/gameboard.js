class GameBoardView {
  constructor(model, selector) {
    this.model = model;
    this.boardNode = document.querySelector(selector);
  }

  newCell(x, y) {
    const cellNode = document.createElement('div');
    cellNode.classList.add('cell');
    cellNode.setAttribute('data-x', x);
    cellNode.setAttribute('data-y', y);
    if (!this.model.isPlayer){
      cellNode.addEventListener('click', () => {
        this.model.receiveAttack({ x, y });
      });
    }
    this.boardNode.appendChild(cellNode);
    return cellNode;
  }

  addEffects(cell, effect) {
    cell.node.classList.add(effect);
  }

  placeShip(ship) {
    ship.node.classList.add('ship');
  }
}

export default GameBoardView;
