import React from 'react';
import ActionButton from '../../../components/Buttons/ActionButton';
import Header from '../../../components/Header';
import Template from '../../../components/Template';

import Cover from '../../../assets/cover.svg';
import { Styles } from './styles';

export const CreateJournal = (): JSX.Element => {
  return (
    <Template>
      <Header />
      <Styles.Container>
        <span>HTML</span>
        <img src={Cover} alt="" />

        <input type="text" />
        <ActionButton>Save journal</ActionButton>
      </Styles.Container>
    </Template>
  );
};
