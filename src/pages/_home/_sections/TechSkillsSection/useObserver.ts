import { useEffect, useRef } from 'react';

export function useObserver () {
  const containerRef = useRef(null);

  useEffect(() => {
    /*  HTML custom property: data-in-view
        CSS selector: [data-in-view]
        JS access: element.dataset.inView (js makes an automatic
        camelCase convesion for property name)
     */
    function observerHandler (entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // @ts-ignore
          entry.target.dataset.inView = true;
        }
      });
    }
    const observer = new IntersectionObserver(observerHandler);

    const { current } = containerRef;
    if (!!current) {
      const hiddenElements: NodeList = current.querySelectorAll('[data-in-view]');
      const elements = Array.from(hiddenElements);
      // @ts-ignore
      elements.forEach((element) => observer.observe(element));
    }

    return () => {
      observer.disconnect();
    }
  }); // no dependency list to ensure observer runs with locale language switch

  return { containerRef };
}