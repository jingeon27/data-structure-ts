import { compareMin } from '../common/compare';
import { Heap } from './heap';

export class MinHeap extends Heap {
  constructor() {
    super(compareMin);
  }
}
