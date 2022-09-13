import React from 'react';
import Logo from '../Logo';
import Row from '../Row';
import { Styles } from './styles';

export const Header = () => {
  return (
    <Styles.Container>
      <Row justify="space-between">
        <Logo />
      </Row>
    </Styles.Container>
  );
};
