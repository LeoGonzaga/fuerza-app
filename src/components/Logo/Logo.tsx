import React from 'react';
import LogoIcon from '../../assets/logo.svg';

type LogoProps = {
  size: number;
};

export const Logo = ({ size }: LogoProps): JSX.Element => {
  return <img src={LogoIcon} alt="Nocturnal" width={size} />;
};
