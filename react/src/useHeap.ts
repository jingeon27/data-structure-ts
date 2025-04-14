import { compareMin, CompareType, HeapObserver } from '@ds/core';
import { useCallback, useState, useSyncExternalStore } from 'react';
import { bindMethods } from './common/bindMap';

export interface useHeapOptions {
  compare?: CompareType;
  initialItems?: number[];
}
export function useHeap({ compare = compareMin, initialItems = [] }: useHeapOptions = {}) {
  const [heap] = useState(() => {
    const h = new HeapObserver(compare);
    initialItems.forEach((item) => h.insert(item));
    return h;
  });

  const { size, ...others } = bindMethods(heap)('insert', 'extract', 'peek', 'size', 'isEmpty');
  const state = useSyncExternalStore(
    useCallback(
      (onChange) => {
        heap.subscribe(onChange);
        return () => heap.unsubscribe(onChange);
      },
      [heap],
    ),
    size,
  );

  return {
    state,
    size,
    ...others,
  };
}
