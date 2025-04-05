import { BaseHeap } from './BaseHeap';

export class MinHeap extends BaseHeap {
  protected compare(a: number, b: number) {
    return a < b;
  }
}
