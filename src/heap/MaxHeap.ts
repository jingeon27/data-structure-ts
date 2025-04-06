import { BaseHeap } from './BaseHeap';

function compare(a: number, b: number) {
  return a > b;
}
export class MaxHeap extends BaseHeap {
  constructor() {
    super(compare);
  }
}
