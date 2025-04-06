import { CompareType } from '../common/compareType';
import { Heap } from './heap';

export const compareMaxHeap: CompareType = (a, b) => a > b;

export class MaxHeap extends Heap {
  constructor() {
    super(compareMaxHeap);
  }
}
