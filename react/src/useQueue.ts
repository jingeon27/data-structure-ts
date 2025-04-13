import { QueueObserver } from '@ds/core';
import { useCallback, useState, useSyncExternalStore } from 'react';
import { bindMethods } from './common/bindMap';

export interface useQueueOptions<T> {
  initialItems?: T[];
}

export function useQueue<T>({ initialItems = [] }: useQueueOptions<T> = {}) {
  const [queue] = useState(() => new QueueObserver<T>(initialItems));
  const { size, ...others } = bindMethods(queue)('enqueue', 'dequeue', 'peek', 'size');

  const state = useSyncExternalStore(
    useCallback(
      (onChange) => {
        queue.subscribe(onChange);
        return () => queue.unsubscribe(onChange);
      },
      [queue],
    ),
    size,
  );

  return {
    state,
    size,
    ...others,
  };
}
