class Event {
  constructor() {
    this.subscribers = {};
  }

  subscrib(type, fn) {
    if(!this.subscribers[type]) {
      this.subscribers[type] = [];
    }

    this.subscribers[type].push(fn);
  }

  unsubscribe(type, unsubscribeFn) {
    if(!this.subscribers[type]) {
      console.warn('The event type you publish is not exist.');
    } else {
      this.subscribers[type] = this.subscribers[type].filter(fn => fn !== unsubscribeFn);
    }
  }

  publish(type, ...args) {
    if(!this.subscribers[type]) {
      console.warn('The event type you publish is not exist.');
    } else {
      this.subscribers[type].forEach(fn => fn.bind(null, ...args));
    }
  }
}