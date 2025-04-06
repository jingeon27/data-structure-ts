import { Queue } from './queue';

describe('Queue', () => {
  it('should enqueue and dequeue in FIFO order', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBeUndefined(); // 더 이상 없을 때
  });

  it('should return the correct size', () => {
    const queue = new Queue<string>();
    expect(queue.size()).toBe(0);

    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.size()).toBe(2);

    queue.dequeue();
    expect(queue.size()).toBe(1);
  });

  it('should peek the first element without removing it', () => {
    const queue = new Queue<string>();
    queue.enqueue('hello');
    expect(queue.peek()).toBe('hello');
    expect(queue.size()).toBe(1); // peek은 제거 안함
  });

  it('should identify if queue is empty', () => {
    const queue = new Queue<boolean>();
    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(true);
    expect(queue.isEmpty()).toBe(false);

    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('should support initializing with items', () => {
    const queue = new Queue<number>([10, 20, 30]);

    expect(queue.size()).toBe(3);
    expect(queue.peek()).toBe(10);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
    expect(queue.isEmpty()).toBe(true);
  });
});
