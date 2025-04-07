import { CompareType } from '../common/compareType';
import { Heap } from './heap';

export const compareMinHeap: CompareType = (a, b) => a < b;

export class MinHeap extends Heap {
  constructor() {
    super(compareMinHeap);
  }
}
