import { useState, useEffect, useRef, type MutableRefObject } from 'react';

type ScrollState = {
  isInViewport: boolean,
  ref: MutableRefObject<any>,
}

export function useScrollState (): ScrollState {
  const ref = useRef(null);
  const [isInViewport, setIsInViewport] = useState<boolean>(true);

  useEffect(() => {
    function observerHandler (entries) {
      const [element] = entries;
      if (element.isIntersecting) {
        setIsInViewport(true);
      } else {
        setIsInViewport(false);
      }
    }

    const observer = new IntersectionObserver(observerHandler);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    }
  }, []);

  return { isInViewport, ref };
}