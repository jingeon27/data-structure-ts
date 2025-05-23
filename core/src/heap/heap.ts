import { compareMin, CompareType } from '../common/compare';

export class Heap {
  private heap: number[] = [];

  constructor(private readonly compare: CompareType = compareMin) {}

  private parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number) {
    return 2 * index + 1;
  }

  private rightChild(index: number) {
    return 2 * index + 2;
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private heapifyUp(index: number) {
    const parent = this.parent(index);
    if (index > 0 && this.compare(this.heap[index], this.heap[parent])) {
      this.swap(index, parent);
      this.heapifyUp(parent);
    }
  }

  private heapifyDown(index: number) {
    const left = this.leftChild(index);
    const right = this.rightChild(index);
    let target = index;

    if (left < this.heap.length && this.compare(this.heap[left], this.heap[target])) {
      target = left;
    }
    if (right < this.heap.length && this.compare(this.heap[right], this.heap[target])) {
      target = right;
    }

    if (target !== index) {
      this.swap(index, target);
      this.heapifyDown(target);
    }
  }

  insert(value: number) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extract() {
    if (this.heap.length === 0) return;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return root;
  }

  peek() {
    if (this.heap.length === 0) return;
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}
