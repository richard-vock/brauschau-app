import { renderHook, act } from '@testing-library/react-hooks';
import useTheme from './index';

describe('useTheme', () => {
  it('should toggle theme state', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current[1].toggle();
    });

    expect(result.current[0]).toBe('light');

    act(() => {
      result.current[1].toggle();
    });

    expect(result.current[0]).toBe('dark');
  });
});
