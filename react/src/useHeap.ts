import { compareMaxHeap, CompareType, HeapObserver } from '@ds/core';
import { useCallback, useState, useSyncExternalStore } from 'react';

export function useHeap(compare: CompareType = compareMaxHeap, initialItems: number[] = []) {
  const [heap] = useState(() => {
    const h = new HeapObserver(compare);
    initialItems.forEach((item) => h.insert(item));
    return h;
  });

  const size = heap.size.bind(heap);

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
    insert: heap.insert.bind(heap),
    extract: heap.extract.bind(heap),
    peek: heap.peek.bind(heap),
    size,
    isEmpty: heap.isEmpty.bind(heap),
  };
}
