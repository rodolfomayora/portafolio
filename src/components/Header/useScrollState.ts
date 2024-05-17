// import { useState, useEffect } from 'react';

//
// type ScrollState = {
//   didScroll: boolean,
// }

// export function useScrollState (): ScrollState {
//   const [didScroll, setDidScroll] = useState<boolean>(false);

//   // useEffect(() => {
//   //   const initialPoint = 0;
//   //   let isScrolling = false;
//   //   let isInTop = true;

//   //   const didUserScroll = window.pageYOffset > 0;
//   //   if (didUserScroll) setDidScroll(true);

//   //   const intervalWatcher = window.setInterval(() => {
//   //     if (isScrolling) {
//   //       // console.log('dddd');
//   //       isScrolling = false;
//   //       // const scrollYOffset = window.pageYOffset;
//   //       const scrollYOffset = window.scrollY;
//   //       const isAtInitialPoint = scrollYOffset === initialPoint;
//   //       const isNoAtInitialPoint = scrollYOffset > 0 && isInTop;

//   //       if (isAtInitialPoint) {
//   //         isInTop = true;
//   //         setDidScroll(false);
//   //       }

//   //       if (isNoAtInitialPoint) {
//   //         isInTop = false;
//   //         setDidScroll(true);
//   //       }
//   //     }
//   //   }, 200);

//   //   const setScrollTrue = (): void => {
//   //     isScrolling = true;
//   //   };

//   //   document.addEventListener('scroll', setScrollTrue);

//   //   return () => {
//   //     window.clearInterval(intervalWatcher);
//   //     document.removeEventListener('scroll', setScrollTrue);
//   //   }
//   // }, []);

//   return { didScroll };
// }