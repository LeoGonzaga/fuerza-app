import React from 'react';
import { Styles } from './styles';

type LinkButtonProps = {
  route: string;
  text: string;
  bold?: boolean;
};

export const LinkButton = ({ text, bold }: LinkButtonProps): JSX.Element => {
  return (
    <Styles.Container bold={bold}>
      {/* <Link to={route}>{text}</Link> */}
      <p>{text}</p>
    </Styles.Container>
  );
};
