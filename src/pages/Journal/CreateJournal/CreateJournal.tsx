import React from 'react';
import ActionButton from '../../../components/Buttons/ActionButton';
import Header from '../../../components/Header';
import Template from '../../../components/Template';

import Cover from '../../../assets/cover.svg';
import { Styles } from './styles';
import { ROUTES } from '../../../constants/routes';

export const CreateJournal = (): JSX.Element => {
  const handle = () => {};
  return (
    <Template>
      <Header text="Add Journal" showButton router={ROUTES.CREATE_JOURNAL} />
      <Styles.Container>
        <span>HTML</span>
        <img src={Cover} alt="" />

        <input type="text" />
        <ActionButton onClick={handle}>Save journal</ActionButton>
      </Styles.Container>
    </Template>
  );
};
