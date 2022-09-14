import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/logo.svg';
import { ROUTES } from '../../constants/routes';

type LogoProps = {
  size: number;
};

export const Logo = ({ size }: LogoProps): JSX.Element => {
  return (
    <Link to={ROUTES.JOURNAL_LIST}>
      <img src={LogoIcon} alt="Nocturnal" width={size} />
    </Link>
  );
};
