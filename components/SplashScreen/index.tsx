import React, { FC, useEffect, useState } from 'react';

import { Circle, SplashScreenStyled} from './styles';

const SplashScreen: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasSiteLoaded, setHasSiteLoaded] = useState<boolean>(false)
  useEffect(() => {
    const init = (): void => {
      window.setTimeout(() => {
        setHasSiteLoaded(true);
      }, 2000);

      window.setTimeout(() => {
        setIsLoading(false)
      }, 4000);
    }

    window.addEventListener('load', init);

    () => {
      window.removeEventListener('load', init);
    }
  },
  [])

  if (isLoading) return (
    <SplashScreenStyled hasSiteLoaded={hasSiteLoaded}>
      <Circle hasSiteLoaded={hasSiteLoaded}/>
    </SplashScreenStyled>
  );
  
  return <></>;
}

export default SplashScreen;