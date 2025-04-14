import { act, renderHook } from '@testing-library/react';
import { useHeap } from './useHeap';

describe('useHeap', () => {
  it('should initialize with given items and maintain heap property', () => {
    const { result } = renderHook(() => useHeap({ initialItems: [5, 3, 8] }));

    expect(result.current.state).toBe(3); // minHeap이므로 최상단은 3
    expect(result.current.size()).toBe(3);
  });

  it('should insert items and reorder heap', () => {
    const { result } = renderHook(() => useHeap());

    act(() => {
      result.current.insert(10);
      result.current.insert(1);
      result.current.insert(5);
    });

    expect(result.current.size()).toBe(3);
    expect(result.current.peek()).toBe(1);
  });

  it('should extract the minimum value and reorder heap', () => {
    const { result } = renderHook(() => useHeap({ initialItems: [4, 2, 7] }));

    let extracted: number | undefined;
    act(() => {
      extracted = result.current.extract();
    });

    expect(extracted).toBe(2);
    expect(result.current.size()).toBe(2);
    expect(result.current.peek()).toBe(4); // 4이 남은 heap top
  });

  it('should report empty state correctly', () => {
    const { result } = renderHook(() => useHeap());

    expect(result.current.isEmpty()).toBe(true);

    act(() => {
      result.current.insert(100);
    });

    expect(result.current.isEmpty()).toBe(false);
  });
});
