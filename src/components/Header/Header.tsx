import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import Logo from '../Logo';
import Row from '../Row';
import { Styles } from './styles';

export const Header = () => {
  return (
    <Styles.Container>
      <Row justify="space-between">
        <Link to={ROUTES.JOURNAL_LIST}>
          <Logo size={146} />
        </Link>
      </Row>
    </Styles.Container>
  );
};
