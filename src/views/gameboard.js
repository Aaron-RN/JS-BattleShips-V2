class GameBoardView {
  constructor(gameLogic, model, selector) {
    this.gameLogic = gameLogic;
    this.model = model;
    this.boardNode = document.querySelector(selector);
    this.cells = Array(this.model.size).fill(Array(this.model.size).fill())
      .map((row, i) => row.map((cell, j) => (this.newCell(j, i))));
    this.placeShips();
  }

  newCell(x, y) {
    const cellNode = document.createElement('div');
    cellNode.classList.add('cell');
    cellNode.setAttribute('data-x', x);
    cellNode.setAttribute('data-y', y);
    if (!this.model.isPlayer){
      cellNode.addEventListener('click', () => {
        this.attackBoard(y, x);
      });
    }
    this.boardNode.appendChild(cellNode);
    return cellNode;
  }

  placeShips() {
    const { model } = this;
    const arraySize = model.size;
    if (!model.isPlayer){return;}    
    for(let x = 0;x < arraySize-1;x += 1){
      for(let y = 0;y < arraySize-1;y += 1){
        if (model.getBoard()[x][y].shipId){ 
          this.cells[x][y].classList.add('ship');
          console.log(model.getBoard()[x][y]);
        }
      }
    }
  }
  
  attackBoard(x, y) {
    const { gameLogic, model } = this;
    const cellNode = this.cells[x][y];
    if (gameLogic.gameOver) {return;}

    const result = model.receiveAttack({ x, y });
    if (result) { cellNode.classList.add(result) }
    gameLogic.isGameOver();
    if(result === 'hit'){gameLogic.setTurn(true);}
    if(result === 'missed'){gameLogic.setTurn();}
  }
}

export default GameBoardView;
