import React from 'react';
import BackButton from '../../../components/BackButton';
import ActionButton from '../../../components/Buttons/ActionButton';
import Header from '../../../components/Header';
import Row from '../../../components/Row';
import Spacing from '../../../components/Spacing';
import Template from '../../../components/Template';
import { ROUTES } from '../../../constants/routes';
import { Styles } from './styles';
import useCreatePost from './useCreatePost';

export const CreatePost = (): JSX.Element => {
  const {
    handleChangeNote,
    handleChangeTitle,
    note,
    title,
    handleSubmit,
    journal,
  } = useCreatePost();
  return (
    <Template>
      <Header />
      <Styles.Header>
        <BackButton route={ROUTES.POST_LIST} title={journal.title} />
      </Styles.Header>
      <Styles.Container>
        <form action="">
          <input
            type="text"
            placeholder="Title"
            onChange={handleChangeTitle}
            value={title}
          />
          <textarea
            name="note"
            placeholder="Write your note"
            onChange={handleChangeNote}
            value={note}
          ></textarea>
          <Spacing top={37} />
          <Row justify="center">
            <ActionButton onClick={handleSubmit}>Save note</ActionButton>
          </Row>
        </form>
      </Styles.Container>
    </Template>
  );
};
