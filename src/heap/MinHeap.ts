export class MinHeap {
  private heap: number[] = [];

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number) {
    return index * 2 + 1;
  }

  private rightChild(index: number) {
    return index * 2 + 2;
  }

  private heapifyUp(index: number) {
    const parent = this.parent(index);
    if (index > 0 && this.heap[index] < this.heap[parent]) {
      this.swap(index, parent);
      this.heapifyUp(parent);
    }
  }

  private heapifyDown(index: number) {
    const left = this.leftChild(index);
    const right = this.rightChild(index);
    let smallest = index;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  insert(value: number) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extract() {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return root;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}
