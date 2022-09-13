import React from 'react';
import Header from '../../../components/Header';
import Template from '../../../components/Template';

import EmptyState from '../../../components/EmptyState';

export const JournalList = (): JSX.Element => {
  return (
    <Template>
      <Header />
      <EmptyState />
    </Template>
  );
};
