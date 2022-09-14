import React from 'react';
import Header from '../../../components/Header';
import Template from '../../../components/Template';

// import EmptyState from '../../../components/EmptyState';
// import { ROUTES } from '../../../constants/routes';
import Cover from '../../../components/Cover';
import { Styles } from './styles';
import Spacing from '../../../components/Spacing';
import { ROUTES } from '../../../constants/routes';

export const JournalList = (): JSX.Element => {
  return (
    <Template>
      <Header showButton text="Add Journal" router={ROUTES.CREATE_JOURNAL} />
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
