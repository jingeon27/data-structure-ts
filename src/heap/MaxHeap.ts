import { CompareType } from '../common/compareType';
import { BaseHeap } from './BaseHeap';

export const compareMaxHeap: CompareType = (a, b) => a > b;
export class MaxHeap extends BaseHeap {
  constructor() {
    super(compareMaxHeap);
  }
}
