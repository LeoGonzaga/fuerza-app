import React from 'react';
import { Styles } from './styles';

type LinkButtonProps = {
  route: string;
  text: string;
};

export const LinkButton = ({ text }: LinkButtonProps): JSX.Element => {
  return (
    <Styles.Container>
      {/* <Link to={route}>{text}</Link> */}
      <p>{text}</p>
    </Styles.Container>
  );
};
