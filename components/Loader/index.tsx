import React , { FC } from 'react';

import { LoaderProps } from './types';
import { LoaderStyled } from './styles';

const Loader: FC<LoaderProps> = props => {
  return <LoaderStyled {...props} />;
}

export default Loader;