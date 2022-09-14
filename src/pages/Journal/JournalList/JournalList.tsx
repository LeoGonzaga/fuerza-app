import React from 'react';
import Header from '../../../components/Header';
import Template from '../../../components/Template';

import EmptyState from '../../../components/EmptyState';
import { ROUTES } from '../../../constants/routes';
import Cover from '../../../components/Cover';
import { Styles } from './styles';
import Spacing from '../../../components/Spacing';
import useJournalList from './useJournalList';

export const JournalList = (): JSX.Element => {
  const { journals } = useJournalList();

  return (
    <Template>
      <Header
        showButton={journals && journals.length > 0}
        text="Add Journal"
        router={ROUTES.CREATE_JOURNAL}
      />
      {journals.length > 0 ? (
        <Styles.Container>
          {journals?.map((journal: any, index: number) => (
            <Cover
              key={index}
              title={journal.title}
              id={journal.id}
              dark={index % 2 !== 0}
            />
          ))}

          <Spacing bottom={30} />
        </Styles.Container>
      ) : (
        <EmptyState text="Create a journal" route={ROUTES.CREATE_JOURNAL} />
      )}
    </Template>
  );
};
