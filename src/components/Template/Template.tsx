import React from 'react';
import { Styles } from './styles';

import background from '../../assets/bg.svg';

type TemplateProps = {
  children: React.ReactNode;
  center?: boolean;
};

export const Template = ({ children, center }: TemplateProps): JSX.Element => {
  return (
    <Styles.Container center={center}>
      <img src={background} alt="" />
      {children}
    </Styles.Container>
  );
};
