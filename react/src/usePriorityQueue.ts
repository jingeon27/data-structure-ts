import { PriorityQueueObserver } from '@ds/core';
import { useState, useSyncExternalStore } from 'react';
import { bindMethods } from './common/bindMap';
import { useSubscribe } from './common/useSubscribe';

export interface UsePriorityQueueOptions<T> {
  initialItems?: { value: T; priority: number }[];
}

export function usePriorityQueue<T>({ initialItems = [] }: UsePriorityQueueOptions<T> = {}) {
  const [queue] = useState(() => {
    const pq = new PriorityQueueObserver<T>();
    initialItems.forEach(({ value, priority }) => pq.enqueue(value, priority));
    return pq;
  });

  const { size, ...others } = bindMethods(queue)('enqueue', 'dequeue', 'peek', 'size', 'isEmpty');

  const state = useSyncExternalStore(useSubscribe(queue), size);

  return {
    state,
    size,
    ...others,
  };
}
