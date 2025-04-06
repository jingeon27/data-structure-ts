import { MinHeap } from './minHeap';

describe('MinHeap', () => {
  let heap: MinHeap;

  beforeEach(() => {
    heap = new MinHeap();
  });

  it('should return undefined when extracting from an empty heap', () => {
    expect(heap.extract()).toBeUndefined();
    expect(heap.peek()).toBeUndefined();
  });

  it('should insert and extract elements in ascending order', () => {
    heap.insert(5);
    heap.insert(3);
    heap.insert(8);
    heap.insert(1);

    expect(heap.extract()).toBe(1);
    expect(heap.extract()).toBe(3);
    expect(heap.extract()).toBe(5);
    expect(heap.extract()).toBe(8);
    expect(heap.extract()).toBeUndefined();
  });

  it('should peek the smallest element without removing it', () => {
    heap.insert(10);
    heap.insert(4);
    heap.insert(7);

    expect(heap.peek()).toBe(4);
    expect(heap.size()).toBe(3);
  });

  it('should return correct size and empty state', () => {
    expect(heap.isEmpty()).toBe(true);
    heap.insert(100);
    expect(heap.size()).toBe(1);
    expect(heap.isEmpty()).toBe(false);
    heap.extract();
    expect(heap.size()).toBe(0);
    expect(heap.isEmpty()).toBe(true);
  });
});
