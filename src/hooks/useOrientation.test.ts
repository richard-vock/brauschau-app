import { renderHook } from '@testing-library/react-hooks';
import useOrientation from './useOrientation';

describe('useOrientation', () => {
  it('should detect screen orientation', () => {
    const { result } = renderHook(() => useOrientation());
    expect(result.current).toBeDefined();
  });
});
