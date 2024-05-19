import { throttle } from '.';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Function: throttle', () => {
  test('Should pass the correct arguments to the wrapper function', () => {
    const mockFn = vi.fn();
    const throttledFn = throttle(mockFn, 100);

    throttledFn('test');
    vi.advanceTimersByTime(100);

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toBeCalledWith('test');
  });

  test('should call the wrapped function only once when is called multiple times within the delay', () => {
    const mockFn = vi.fn();
    const throttledFn = throttle(mockFn, 100);

    throttledFn('test1'); // Call 1 (should be executed)
    throttledFn('test2'); // Call 2 (should be throttled)
    throttledFn('test3'); // Call 3 (should be throttled)
    vi.advanceTimersByTime(100); // simulate delay

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toBeCalledWith('test1');
  });

  test('should call the wrapped function for subsequent calls after the delay', () => {
    const mockFn = vi.fn();
    const throttledFn = throttle(mockFn, 100);

    throttledFn(); // call 1 (should be executed)
    throttledFn(); // call 2 (should be throtled)
    vi.advanceTimersByTime(100);
    throttledFn(); // call 3 (should be executed)
    vi.advanceTimersByTime(100);

    expect(mockFn).toBeCalledTimes(2);
  });
});