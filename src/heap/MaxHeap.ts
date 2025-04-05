import { BaseHeap } from './BaseHeap';

export class MaxHeap extends BaseHeap {
  protected compare(a: number, b: number) {
    return a > b;
  }
}
