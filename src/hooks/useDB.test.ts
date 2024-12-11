import { renderHook } from '@testing-library/react-hooks';
import useDB from './useDB';

describe('useDB', () => {
  it('should initialize the database', () => {
    const { result } = renderHook(() => useDB());
    expect(result.current).toBeDefined();
  });
});
