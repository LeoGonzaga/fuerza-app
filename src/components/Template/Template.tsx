import React from 'react';
import { Styles } from './styles';

import background from '../../assets/bg.svg';

type TemplateProps = {
  children: React.ReactNode;
};

export const Template = ({ children }: TemplateProps): JSX.Element => {
  return (
    <Styles.Container>
      <img src={background} alt="" />
      {children}
    </Styles.Container>
  );
};
