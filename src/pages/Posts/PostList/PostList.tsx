import React from 'react';
import EmptyState from '../../../components/EmptyState';
import Header from '../../../components/Header';
import Template from '../../../components/Template';
import { ROUTES } from '../../../constants/routes';

export const PostList = (): JSX.Element => {
  return (
    <Template>
      <Header />
      <EmptyState
        showText
        route={ROUTES.CREATE_POST}
        text="Create a note"
        note="HTML"
      />
    </Template>
  );
};
