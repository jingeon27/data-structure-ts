import { QueueObserver } from '@ds/core';
import { useState, useSyncExternalStore } from 'react';
import { bindMethods } from './common/bindMap';
import { useSubscribe } from './common/useSubscribe';

export interface useQueueOptions<T> {
  initialItems?: T[];
}

export function useQueue<T>({ initialItems = [] }: useQueueOptions<T> = {}) {
  const [queue] = useState(() => new QueueObserver<T>(initialItems));
  const { size, ...others } = bindMethods(queue)('enqueue', 'dequeue', 'peek', 'size');

  const state = useSyncExternalStore(useSubscribe(queue), size);

  return {
    state,
    size,
    ...others,
  };
}
