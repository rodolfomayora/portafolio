type Callback = (...args: any[]) => any;

export function throttle (callback: Callback, delay: number): Callback {
  const isNegativeNumber = delay < 0;
  if (isNegativeNumber) throw new Error('\'delay\' parameter should recieve a positive number');

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