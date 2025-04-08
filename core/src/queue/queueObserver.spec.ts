import { QueueObserver } from './queueObserver';

describe('QueueObserver', () => {
  it('should enqueue items and notify observers', (done) => {
    const queue = new QueueObserver<string>(['A']);
    const listener = jest.fn(() => {
      expect(queue.toArray()).toEqual(['A', 'B']);
      expect(listener).toHaveBeenCalledTimes(1);
      done();
    });

    queue.subscribe(listener);
    queue.enqueue('B');
  });

  it('should dequeue items and notify observers', (done) => {
    const queue = new QueueObserver<string>(['A', 'B']);
    const listener = jest.fn(() => {
      expect(queue.toArray()).toEqual(['B']);
      expect(listener).toHaveBeenCalledTimes(1);
      done();
    });

    queue.subscribe(listener);
    queue.dequeue();
  });

  it('should not call unsubscribed listeners', () => {
    const queue = new QueueObserver<string>(['X']);
    const listener = jest.fn();

    queue.subscribe(listener);
    queue.unsubscribe(listener);
    queue.enqueue('Y');

    return new Promise((resolve) => {
      queueMicrotask(() => {
        expect(listener).not.toHaveBeenCalled();
        resolve(null);
      });
    });
  });

  it('should return correct items via toArray()', () => {
    const queue = new QueueObserver<number>([1, 2, 3]);
    expect(queue.toArray()).toEqual([1, 2, 3]);

    queue.enqueue(4);
    queue.dequeue();
    expect(queue.toArray()).toEqual([2, 3, 4]);
  });
});
