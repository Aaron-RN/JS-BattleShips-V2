class GameBoardView {
  constructor(model, selector) {
    this.model = model;
    this.boardNode = document.querySelector(selector);
    this.cells = Array(this.model.size).fill(Array(this.model.size).fill())
      .map((row, i) => row.map((cell, j) => (this.newCell(j, i))));
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

  addEffects({x, y}, effect) {
    const cell = cells[x][y];
    cell.classList.add(effect);
  }

  placeShip({x, y}) {
    const cell = cells[x][y];
    cell.classList.add('ship');
  }
}

export default GameBoardView;
