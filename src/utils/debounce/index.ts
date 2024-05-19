type Callback = (...args: any[]) => any;

export function debounce (callback: Callback, delay: number): Callback {
  let timeout = undefined;
  return (...args) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(()=> callback(...args), delay);
  }
}