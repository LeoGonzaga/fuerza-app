import React from 'react';
import BackButton from '../../../components/BackButton';
import OutlineButton from '../../../components/Buttons/OutlineButton';
import EmptyState from '../../../components/EmptyState';
import Header from '../../../components/Header';
import Notes from '../../../components/Notes';
import Spacing from '../../../components/Spacing';
import Template from '../../../components/Template';
import { ROUTES } from '../../../constants/routes';
import { Styles } from './styles';
import usePostList from './usePostList';

export const PostList = (): JSX.Element => {
  const { posts, journal, loading } = usePostList();

  if (loading) return <>Loading</>;
  return (
    <Template>
      <Header />
      {posts?.length > 0 && (
        <Styles.Header>
          <BackButton route={ROUTES.JOURNAL_LIST} title={journal.title} />
          <OutlineButton text="Add note" route={ROUTES.CREATE_POST} />
        </Styles.Header>
      )}

      {posts?.length > 0 ? (
        <Styles.Container>
          {posts.map((post: any, index: number) => (
            <Notes key={index} content={post.content} />
          ))}

          <Spacing bottom={30} />
        </Styles.Container>
      ) : (
        <EmptyState
          showText
          route={ROUTES.CREATE_POST}
          text="Create a note"
          note={journal.title || ''}
        />
      )}
    </Template>
  );
};
