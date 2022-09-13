import React from 'react';
import { Link } from 'react-router-dom';
import { Styles } from './styles';

type LinkButtonProps = {
  route: string;
  text: string;
  bold?: boolean;
};

export const LinkButton = ({
  text,
  bold,
  route,
}: LinkButtonProps): JSX.Element => {
  return (
    <Styles.Container bold={bold}>
      <Link to={route}>
        <p>{text}</p>
      </Link>
    </Styles.Container>
  );
};
