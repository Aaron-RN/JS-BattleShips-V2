class Event {
  constructor() {
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  notify(args) {
    this.listeners.forEach(listener => { listener(args); });
  }
}

export default Event;
