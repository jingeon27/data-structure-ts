import { compareMax } from '../common/compare';
import { Heap } from './heap';

export class MaxHeap extends Heap {
  constructor() {
    super(compareMax);
  }
}
