import React from 'react';
import Header from '../../../components/Header';
import Template from '../../../components/Template';

// import EmptyState from '../../../components/EmptyState';
// import { ROUTES } from '../../../constants/routes';
import Cover from '../../../components/Cover';
import { Styles } from './styles';
import Spacing from '../../../components/Spacing';

export const JournalList = (): JSX.Element => {
  return (
    <Template>
      <Header />
      <Styles.Container>
        <Cover />
        <Cover dark />
        <Cover />
        <Cover />
        <Cover />
        <Cover />
        <Cover />
        <Cover />

        <Spacing bottom={30} />
      </Styles.Container>
      {/* <EmptyState text="Create a journal" route={ROUTES.CREATE_JOURNAL} /> */}
    </Template>
  );
};
