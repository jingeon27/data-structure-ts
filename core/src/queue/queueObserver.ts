import { Observable } from '../common/observer';
import { Queue } from './queue';

export class QueueObserver<T> extends Queue<T> {
  private observable = new Observable();

  constructor(initialItems: T[] = []) {
    super(initialItems);
  }

  override enqueue(item: T) {
    super.enqueue(item);
    this.observable.notify();
  }

  override dequeue() {
    const item = super.dequeue();
    this.observable.notify();
    return item;
  }

  subscribe(listener: VoidFunction) {
    this.observable.subscribe(listener);
  }

  unsubscribe(listener: VoidFunction) {
    this.observable.unsubscribe(listener);
  }
  toArray() {
    return super.toArray();
  }
}
