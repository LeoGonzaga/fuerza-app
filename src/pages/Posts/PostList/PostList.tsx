import React from 'react';
import EmptyState from '../../../components/EmptyState';
import Header from '../../../components/Header';
import Template from '../../../components/Template';

export const PostList = (): JSX.Element => {
  return (
    <Template>
      <Header />
      <EmptyState showText />
    </Template>
  );
};
