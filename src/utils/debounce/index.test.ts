import { debounce } from '.';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Function: debounce', () => {
  test('Should pass the correct arguments to the wrapper function', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn('test');
    vi.advanceTimersByTime(100);

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toBeCalledWith('test');
  });

  test('should calls the wrapped function only once after the last call within the delay', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn('test1'); // call 1 (should be debounced)
    debouncedFn('test2'); // call 1 (should be debounced)
    debouncedFn('test3'); // call 1 (should be executed)
    vi.advanceTimersByTime(100); // simulate delay

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toBeCalledWith('test3');
  });

  test('Should calls the wrapped function for subsequent calls after the last call', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn(); // call 1 (should be debounced)
    debouncedFn(); // call 2 (should be executed)
    vi.advanceTimersByTime(100);
    debouncedFn(); // call 1 (should be executed)
    vi.advanceTimersByTime(100);

    expect(mockFn).toBeCalledTimes(2);
  });

  test('Should throw an error when \'delay\' parameter receive a negative argument', () => {
    const doError = () => debounce(() => {}, -100);

    expect(doError).toThrowError(/^\'delay\' parameter should recieve a positive number$/i);
  });
});