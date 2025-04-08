import { QueueObserver } from '@ds/core';
import { useCallback, useState, useSyncExternalStore } from 'react';

export function useQueue<T>(initialValue: T[] = []) {
  const [queue] = useState(() => new QueueObserver<T>(initialValue));

  const state = useSyncExternalStore(
    useCallback(
      (onChange) => {
        queue.subscribe(onChange);
        return () => queue.unsubscribe(onChange);
      },
      [queue],
    ),
    queue.size.bind(queue),
  );

  return {
    state,
    enqueue: queue.enqueue.bind(queue),
    dequeue: queue.dequeue.bind(queue),
    peek: queue.peek.bind(queue),
    size: queue.size.bind(queue),
  };
}
