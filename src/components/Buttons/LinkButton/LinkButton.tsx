import React from 'react';
import { Link } from 'react-router-dom';
import { Styles } from './styles';

type LinkButtonProps = {
  route: string;
  text: string;
  bold?: boolean;
  size?: number;
};

export const LinkButton = ({
  text,
  bold,
  route,
  size,
}: LinkButtonProps): JSX.Element => {
  return (
    <Styles.Container bold={bold} size={size}>
      <Link to={route}>
        <p>{text}</p>
      </Link>
    </Styles.Container>
  );
};
