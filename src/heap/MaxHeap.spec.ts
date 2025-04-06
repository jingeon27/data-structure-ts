import { MaxHeap } from './MaxHeap';

describe('MaxHeap', () => {
  let heap: MaxHeap;

  beforeEach(() => {
    heap = new MaxHeap();
  });

  it('should return undefined when extracting from an empty heap', () => {
    expect(heap.extract()).toBeUndefined();
    expect(heap.peek()).toBeUndefined();
  });

  it('should insert and extract elements in descending order', () => {
    heap.insert(5);
    heap.insert(3);
    heap.insert(8);
    heap.insert(1);

    expect(heap.extract()).toBe(8);
    expect(heap.extract()).toBe(5);
    expect(heap.extract()).toBe(3);
    expect(heap.extract()).toBe(1);
    expect(heap.extract()).toBeUndefined();
  });

  it('should peek the largest element without removing it', () => {
    heap.insert(10);
    heap.insert(14);
    heap.insert(7);

    expect(heap.peek()).toBe(14);
    expect(heap.size()).toBe(3);
  });

  it('should return correct size and empty state', () => {
    expect(heap.isEmpty()).toBe(true);
    heap.insert(42);
    expect(heap.size()).toBe(1);
    expect(heap.isEmpty()).toBe(false);
    heap.extract();
    expect(heap.size()).toBe(0);
    expect(heap.isEmpty()).toBe(true);
  });
});
