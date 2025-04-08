export class Observable {
  private listeners = new Set<VoidFunction>();

  notify() {
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener: VoidFunction) {
    this.listeners.add(listener);
  }

  unsubscribe(listener: VoidFunction) {
    this.listeners.delete(listener);
  }
}
