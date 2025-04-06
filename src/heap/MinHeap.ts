import { BaseHeap } from './BaseHeap';

export function compareMinHeap(a: number, b: number) {
  return a < b;
}
export class MinHeap extends BaseHeap {
  constructor() {
    super(compareMinHeap);
  }
}
