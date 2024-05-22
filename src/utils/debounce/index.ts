type Callback = (...args: any[]) => any;

export function debounce (callback: Callback, delay: number): Callback {
  const isNegativeNumer = delay < 0;
  if (isNegativeNumer) throw new Error('\'delay\' parameter should recieve a positive number');

  let timeout = undefined;
  return (...args) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(()=> callback(...args), delay);
  }
}