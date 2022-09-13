import React from 'react';
import Header from '../../../components/Header';
import Template from '../../../components/Template';

import EmptyState from '../../../components/EmptyState';
import { ROUTES } from '../../../constants/routes';

export const JournalList = (): JSX.Element => {
  return (
    <Template>
      <Header />
      <EmptyState text="Create a journal" route={ROUTES.CREATE_JOURNAL} />
    </Template>
  );
};
