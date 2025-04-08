import { QueueObserver } from '@ds/core';
import { useCallback, useState, useSyncExternalStore } from 'react';

export function useQueue<T>() {
  const [queue] = useState(() => new QueueObserver<T>());

  const state = useSyncExternalStore(
    useCallback(
      (onChange) => {
        queue.subscribe(onChange);
        return () => queue.unsubscribe(onChange);
      },
      [queue],
    ),
    useCallback(queue.toArray, [queue]),
  );

  return {
    state,
    enqueue: queue.enqueue,
    dequeue: queue.dequeue,
    peek: queue.peek,
    size: queue.size,
  };
}
