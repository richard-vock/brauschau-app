import { renderHook, act } from '@testing-library/react-hooks';
import useSidebar from './index';

describe('useSidebar', () => {
  it('should toggle sidebar state', () => {
    const { result } = renderHook(() => useSidebar());

    act(() => {
      result.current[1].toggle();
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1].toggle();
    });

    expect(result.current[0]).toBe(false);
  });

  it('should open sidebar', () => {
    const { result } = renderHook(() => useSidebar());

    act(() => {
      result.current[1].open();
    });

    expect(result.current[0]).toBe(true);
  });

  it('should close sidebar', () => {
    const { result } = renderHook(() => useSidebar());

    act(() => {
      result.current[1].open();
    });

    act(() => {
      result.current[1].close();
    });

    expect(result.current[0]).toBe(false);
  });
});
