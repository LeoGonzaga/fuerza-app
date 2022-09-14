import React from 'react';
import OutlineButton from '../Buttons/OutlineButton';
import Logo from '../Logo';
import Row from '../Row';
import { Styles } from './styles';

type HeaderProps = {
  text?: string;
  router?: string;
  showButton?: boolean;
};

export const Header = ({ router, showButton, text }: HeaderProps) => {
  return (
    <Styles.Container>
      <Row justify="space-between">
        <Logo size={146} />
        {showButton && <OutlineButton text={text} route={router} />}
      </Row>
    </Styles.Container>
  );
};
