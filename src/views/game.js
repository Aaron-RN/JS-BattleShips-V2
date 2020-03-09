import Game from '../models/game';
import cannonUp from '../images/ship.png';
import cannonDown from '../images/cannonDown.png';
import missShot from '../images/missed.gif';
import hitShot from '../images/kboom.gif';
import fireBurn from '../images/slowburn.gif';
//import playSound from '../audio/audio';

class GameView {
  constructor(size = 10) {
    this.size = size;
    this.game = new Game('You', 'Enemy', size);
    this.game.player1.targetBoard.placeAllShips();
    this.game.player2.targetBoard.placeAllShips();
    this.playerBoardNode = document.getElementById('PlayerBoard');
    this.enemyBoardNode = document.getElementById('EnemyBoard');
    this.page = document.querySelector('body');
    this.modal = document.querySelector('.aa-modal');
    this.modalContent = document.querySelector(".aa-modal-content");
    this.enemyMoves = [...Array(this.size ** 2).keys()];
    this.initHeader();
  }

  run() {
    GameView.renderBoard(this.playerBoardNode, this.game.player2.targetBoard.board);
    GameView.renderBoard(this.enemyBoardNode, this.game.player1.targetBoard.board, true);

    this.enemyBoardNode.childNodes.forEach(cell => {
      cell.addEventListener('click', () => {
        if (!this.game.over && !this.game.cutscene) {
          this.playerPlay(cell);

          if (this.game.over) {
            if (this.game.winner.name === 'You') this.gameOver('Congratulations, you win!');
            else {
              this.gameOver('Uh oh, the Enemy wins!');
            }
          }
        }
      });
    });
  }
  SwitchTurns(){
    let {modal, modalContent, game} = this;
    let { turnsTaken } = game;
    const player = game.currentPlayer === game.player1? 'Player' : 'Enemy';
    if (player==='Player'){ 
      turnsTaken += 1; 
      this.enemyBoardNode.scrollIntoView({behavior: "smooth", block: "center"});
    }else{ this.playerBoardNode.scrollIntoView({behavior: "smooth", block: "center"});}
    modal.classList.remove("fade","fade-5");
    modal.classList.add("fade");
    modalContent.innerHTML=`<p class='glowText'>Round: ${turnsTaken} </p><p class='glowText'>${player}'s Turn<p>`
    //snd_gui_open.play();
    setTimeout(() => this.CloseModal(true), 2000);
  }
  
  CloseModal(switched){
    if(!this.game.over){
      let {modal, modalContent, whosTurn} = this;
      modal.classList.toggle("show");
      modalContent.innerHTML='';

      if(switched) { this.enemyPlay(); }
      else if(this.game.currentPlayer === this.game.player2) {
        setTimeout(() => {this.enemyPlay(); return;}, 100) }
      this.game.cutscene = false;
    }
  }
  
  playerPlay(cell) {
    const { game } = this;

    if(game.currentPlayer !== game.player1 ){ return; }
    const result = this.game.play(cell.dataset);
    if (result) { 
      this.CannonFireTransitions(cell, result);
    }

    return result;
  }

  enemyPlay() {
    const { game } = this;
    if (game.currentPlayer !== game.player2 ){ return; }
    const move = this.enemyMoves.splice(Math.floor(Math.random() * this.enemyMoves.length), 1)[0];
    const coords = { x: Math.floor(move / this.size), y: move % this.size };
    const result = this.game.play(coords);
    const cell = this.playerBoardNode
      .querySelector(`[data-x="${coords.x}"][data-y="${coords.y}"]`);
    this.CannonFireTransitions(cell, result);

    return result;
  }

  CannonFireTransitions(cell, result){
    let {modal, page, modalContent, game} = this;
    clearInterval(this.timer);
    
    game.cutscene = true;
    modal.classList.remove("fade");
    modal.classList.add("fade-5");
    modal.classList.toggle("show");
    modalContent.innerHTML=`<img id='playerCannon' src='${cannonUp}'><img id='enemyCannon' src='${cannonDown}'><div class='cannonMissile missileFalling'></div>`;
    const playerCannon = document.getElementById("playerCannon");
    const enemyCannon = document.getElementById("enemyCannon");
    const missile = document.querySelector(".cannonMissile");
    if(game.currentPlayer===game.player1)
    {
        playerCannon.classList.toggle("show");
        playerCannon.classList.add("cannon");
    }
    if(game.currentPlayer===game.player2)
    {
        enemyCannon.classList.toggle("show");
        enemyCannon.classList.add("cannon");
    }
    this.timer = setTimeout(() => {
      if(result==='missed'){this.SwitchTurns();}
      if(result==='hit'){this.CloseModal();}
    }, 5000);
    //This occurs in line with the firing animation of the cannon
    this.timer = setTimeout(() => {
        page.classList.add("shake");
        modal.classList.add("flash");
//        playSound('fire');
    },500);
    //Displays the falling missile animation
    this.timer = setTimeout(() => {
        missile.style.display="block";
    },1500);

    this.timer = setTimeout(() => {
      cell.classList.add(result);
      if (result === 'missed'){
        modalContent.innerHTML=`<img class='splash' src='${missShot}'>`; }
      if (result === 'hit'){
        modalContent.innerHTML=`<img class='splash' src='${hitShot}'>`; }
      if(game.currentPlayer===game.player1){playerCannon.classList.remove("cannon", "show");}
      if(game.currentPlayer===game.player2){enemyCannon.classList.remove("cannon", "show");}
      page.classList.remove("shake");
      modal.classList.remove("flash");
    },3000);  
  }
  
  static renderBoard(boardNode, board, enemy = false) {
    board.forEach((row, i) => {
      row.forEach((cell, j) => {
        const cellNode = document.createElement('div');
        cellNode.classList.add('cell');
        cellNode.setAttribute('data-x', i);
        cellNode.setAttribute('data-y', j);
        cellNode.textContent=i+j;
        if (!enemy && board[i][j].shipId) {
          cellNode.classList.add('ship');
        }
        boardNode.appendChild(cellNode);
      });
    });
  }

  initHeader() {
    const headerNode = document.getElementById('header');
    this.messageContainer = document.createElement('div');
    this.messageContainer.classList.toggle('hidden');
    this.message = document.createElement('p');
    const button = document.createElement('button');
    button.innerHTML = 'Play again?';
    button.addEventListener('click', () => { window.location.reload(); });
    this.messageContainer.appendChild(this.message);
    this.messageContainer.appendChild(button);

    headerNode.appendChild(this.messageContainer);
  }

  gameOver(message) {
    this.message.innerHTML = message;
    this.messageContainer.classList.toggle('hidden');
  }
}

export default GameView;
