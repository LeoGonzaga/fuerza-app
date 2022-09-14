import React from 'react';
import ActionButton from '../../../components/Buttons/ActionButton';
import Header from '../../../components/Header';
import Template from '../../../components/Template';

import Cover from '../../../assets/cover.svg';
import { Styles } from './styles';
import { ROUTES } from '../../../constants/routes';
import useCreateJournal from './useCreateJournal';

export const CreateJournal = (): JSX.Element => {
  const { handleChangeTitle, title, handelCreateJournal } = useCreateJournal();
  return (
    <Template>
      <Header text="Add Journal" router={ROUTES.CREATE_JOURNAL} />
      <Styles.Container>
        <span>{title}</span>
        <img src={Cover} alt="" />

        <input
          type="text"
          value={title}
          onChange={handleChangeTitle}
          placeholder="Journal name"
        />
        <ActionButton onClick={handelCreateJournal}>Save journal</ActionButton>
      </Styles.Container>
    </Template>
  );
};
