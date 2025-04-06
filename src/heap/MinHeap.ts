import { CompareType } from '../common/compareType';
import { BaseHeap } from './BaseHeap';

export const compareMinHeap: CompareType = (a, b) => a < b;

export class MinHeap extends BaseHeap {
  constructor() {
    super(compareMinHeap);
  }
}
