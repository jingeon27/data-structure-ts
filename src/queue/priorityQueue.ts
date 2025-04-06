import { MinHeap } from '../heap/minHeap';

export class MapPriorityQueue<T> {
  private map = new Map<number, T[]>();
  private heap = new MinHeap();
  private count = 0;

  enqueue(value: T, priority: number) {
    if (!this.map.has(priority)) {
      this.map.set(priority, []);
      this.heap.insert(priority);
    }

    this.map.get(priority)!.push(value);
    this.count += 1;
  }

  dequeue() {
    if (this.isEmpty()) return;

    const minPriority = this.heap.peek();
    // undefined일 경우는 위에 isEmpty일 경우뿐이기에 타입 강제 처리
    const queue = this.map.get(minPriority!)!;
    const value = queue.shift();
    this.count -= 1;

    if (queue.length === 0) {
      this.map.delete(minPriority!);
      this.heap.extract();
    }

    return value;
  }

  peek() {
    if (this.isEmpty()) return;

    const minPriority = this.heap.peek();
    // undefined일 경우는 위에 isEmpty일 경우뿐이기에 타입 강제 처리
    return this.map.get(minPriority!)![0];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }
}
