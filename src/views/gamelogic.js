class GameLogicView {
  constructor(selector) {
    const headerNode = document.querySelector(selector);
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Battleships';
    this.messageContainer = document.createElement('div');
    this.messageContainer.classList.toggle('hidden');
    this.message = document.createElement('p');
    const button = document.createElement('button');
    button.innerHTML = 'Play again?';
    button.addEventListener('click', () => { window.location.reload() });
    this.messageContainer.appendChild(this.message);
    this.messageContainer.appendChild(button);

    headerNode.appendChild(h1);
    headerNode.appendChild(this.messageContainer);
  }

  gameOver(message) {
    this.message.innerHTML = message;
    this.messageContainer.classList.toggle('hidden');
  }
}

export default GameLogicView;
