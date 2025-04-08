import { Observable } from '../common/observer';
import { Queue } from './queue';

export class QueueObserver<T> extends Queue<T> {
  private observable = new Observable();

  constructor(initialItems: T[] = []) {
    console.log(initialItems);
    super(initialItems); // ✅ 이게 없으면 Queue 내부 items가 undefined가 됨
  }

  override enqueue(item: T) {
    super.enqueue(item);
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
  toArray() {
    return super.toArray();
  }
}
