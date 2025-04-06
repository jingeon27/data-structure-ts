import { BaseHeap } from './BaseHeap';

export function compareMaxHeap(a: number, b: number) {
  return a > b;
}
export class MaxHeap extends BaseHeap {
  constructor() {
    super(compareMaxHeap);
  }
}
