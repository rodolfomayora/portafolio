type Callback = (...args: any[]) => any;

export function throttle (callback: Callback, delay: number): Callback {
  let timeout = undefined;

  return (...args) => {
    const hasTimeout = !!timeout;
    if (hasTimeout) return;

    timeout = window.setTimeout(() => {
      timeout = undefined;
    }, delay);

    return callback(...args);
  }
}