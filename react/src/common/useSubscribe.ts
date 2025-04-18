import { Observable } from '@ds/core';
import { useCallback } from 'react';

export function useSubscribe<T extends Pick<Observable, 'subscribe' | 'unsubscribe'>>(observer: T) {
  return useCallback(
    (onChange: VoidFunction) => {
      observer.subscribe(onChange);
      return () => observer.unsubscribe(onChange);
    },
    [observer],
  );
}
