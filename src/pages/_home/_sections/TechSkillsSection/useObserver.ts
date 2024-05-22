import { useEffect, useRef } from 'react';

export function useObserver () {
  const containerRef = useRef(null);

  useEffect(() => {
    /*  HTML custom property: data-in-view
        CSS selector: [data-in-view]
        JS access: element.dataset.inView (js makes an automatic
        camelCase convesion for property name)
     */
    function observerHandler (entries: IntersectionObserverEntry[], observer): void {
      entries.forEach((entry, index) => {
        const element = entry.target as HTMLElement; // Type casting
        if (entry.isIntersecting) {
          element.style.setProperty('--delay', `${index}`);
          element.dataset.inView = `${true}`;
          observer.unobserve(element); // optimize observer
        }
      });
    }
    const observer = new IntersectionObserver(observerHandler, {
      // threshold: [0.5], // runs handler when elemen is 50% visible (is 0% by default)
      // root: null,
      rootMargin: '-140px' // runs when reach the element margin
    });

    const { current } = containerRef;
    if (!!current) {
      // const hiddenElements: NodeList = current.querySelectorAll('li');
      const hiddenElements: NodeList = current.querySelectorAll('[data-in-view]');
      const elements = Array.from(hiddenElements) as Element[]; // Type casting
      elements.forEach((element) => observer.observe(element));
    }

    return () => {
      observer.disconnect();
    }
  }); // no dependency list to ensure observer runs with locale language switch

  return { containerRef };
}