import { act, renderHook } from '@testing-library/react';
import { usePriorityQueue } from './usePriorityQueue';

describe('usePriorityQueue', () => {
  it('should enqueue and return correct size and peek', () => {
    const { result } = renderHook(() => usePriorityQueue<string>());

    act(() => {
      result.current.enqueue('banana', 5);
      result.current.enqueue('apple', 2);
    });

    expect(result.current.size()).toBe(2);
    expect(result.current.peek()).toBe('apple');
  });

  it('should dequeue in correct priority order', () => {
    const { result } = renderHook(() =>
      usePriorityQueue<string>({
        initialItems: [
          { value: 'A', priority: 3 },
          { value: 'B', priority: 1 },
        ],
      }),
    );

    act(() => {
      result.current.enqueue('C', 2);
    });

    act(() => {
      expect(result.current.dequeue()).toBe('B');
      expect(result.current.dequeue()).toBe('C');
      expect(result.current.dequeue()).toBe('A');
    });

    expect(result.current.isEmpty()).toBe(true);
  });
});
