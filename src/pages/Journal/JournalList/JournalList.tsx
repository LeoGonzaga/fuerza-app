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
  const { journals, handleSelectedJournal, loading } = useJournalList();

  if (loading) return <>Loading</>;
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
            <div
              key={index}
              onClick={() => handleSelectedJournal(journal.id, journal.title)}
            >
              <Cover title={journal.title} dark={index % 2 !== 0} />
            </div>
          ))}

          <Spacing bottom={30} />
        </Styles.Container>
      ) : (
        <EmptyState text="Create a journal" route={ROUTES.CREATE_JOURNAL} />
      )}
    </Template>
  );
};
