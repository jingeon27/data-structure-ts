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
    useCallback(() => {
      console.log(queue.toArray());
      return queue.toArray().join(',');
    }, [queue, initialValue]),
  );

  return {
    state,
    enqueue: queue.enqueue,
    dequeue: queue.dequeue,
    peek: queue.peek,
    size: queue.size,
  };
}
