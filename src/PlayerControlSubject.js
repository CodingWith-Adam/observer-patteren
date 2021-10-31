export default class PlayerControlSubject {
  observers = [];

  registerObserver(observer) {
    this.observers.push(observer);
  }

  unRegisterObserver(observer) {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  notify(state) {
    this.observers.forEach((observer) => observer.update(state));
  }
}
