// HeapObserver.ts
import { Observable } from '../common/observer';
import { Heap } from './heap';

export class HeapObserver extends Heap {
  private observable = new Observable();

  override insert(value: number) {
    super.insert(value);
    this.observable.notify();
  }

  override extract() {
    const value = super.extract();
    this.observable.notify();
    return value;
  }

  subscribe(listener: VoidFunction) {
    console.log(listener);
    this.observable.subscribe(listener);
  }

  unsubscribe(listener: VoidFunction) {
    this.observable.unsubscribe(listener);
  }
}
