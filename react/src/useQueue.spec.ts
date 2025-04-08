import { act, renderHook } from '@testing-library/react';
import { useQueue } from './useQueue';

describe('useQueue', () => {
  it('should enqueue and reflect size', () => {
    const { result } = renderHook(() => useQueue());

    act(() => {
      result.current.enqueue('A');
      console.log(result.current.state);
    });

    expect(result.current.size).toBe(1);
  });

  it('should dequeue and reflect size', () => {
    const { result } = renderHook(() => useQueue());

    act(() => {
      result.current.enqueue('A');
      result.current.enqueue('B');
    });

    act(() => {
      result.current.dequeue();
    });

    expect(result.current.size).toBe(1);
    expect(result.current.peek()).toBe('B');
  });
});
