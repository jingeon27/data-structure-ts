import { Observable } from '../common/observer';
import { Queue } from './queue';

export class QueueObserver<T> extends Queue<T> {
  private observable = new Observable();

  override enqueue(item: T) {
    super.enqueue(item);
    this.observable.notify();
  }

  override dequeue() {
    const item = super.dequeue();
    this.observable.notify();
    return item;
  }

  subscribe(listener: () => void) {
    this.observable.subscribe(listener);
  }

  unsubscribe(listener: () => void) {
    this.observable.unsubscribe(listener);
  }
}
