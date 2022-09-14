import React from 'react';
import BackButton from '../../../components/BackButton';
import OutlineButton from '../../../components/Buttons/OutlineButton';
// import EmptyState from '../../../components/EmptyState';
import Header from '../../../components/Header';
import Notes from '../../../components/Notes';
import Spacing from '../../../components/Spacing';
import Template from '../../../components/Template';
import { ROUTES } from '../../../constants/routes';
// import { ROUTES } from '../../../constants/routes';
import { Styles } from './styles';

export const PostList = (): JSX.Element => {
  return (
    <Template>
      <Header />
      <Styles.Header>
        <BackButton route={ROUTES.JOURNAL_LIST} />
        <OutlineButton text="Add note" />
      </Styles.Header>
      <Styles.Container>
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Spacing bottom={30} />
      </Styles.Container>
      {/* <EmptyState
        showText
        route={ROUTES.CREATE_POST}
        text="Create a note"
        note="HTML"
      /> */}
    </Template>
  );
};
