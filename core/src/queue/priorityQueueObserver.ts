import { Observable } from '../common/observer';
import { PriorityQueue } from './priorityQueue';

export class PriorityQueueObserver<T> extends PriorityQueue<T> {
  private observable = new Observable();

  override enqueue(value: T, priority: number) {
    super.enqueue(value, priority);
    queueMicrotask(() => this.observable.notify());
  }

  override dequeue() {
    const item = super.dequeue();
    queueMicrotask(() => this.observable.notify());
    return item;
  }

  subscribe(listener: VoidFunction) {
    this.observable.subscribe(listener);
  }

  unsubscribe(listener: VoidFunction) {
    this.observable.unsubscribe(listener);
  }
}
