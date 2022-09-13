import React from 'react';
import BackButton from '../../../components/BackButton';
import ActionButton from '../../../components/Buttons/ActionButton';
import Header from '../../../components/Header';
import Row from '../../../components/Row';
import Spacing from '../../../components/Spacing';
import Template from '../../../components/Template';
import { Styles } from './styles';

export const CreatePost = (): JSX.Element => {
  return (
    <Template>
      <Header />
      <BackButton />
      <Styles.Container>
        <form action="">
          <input type="text" placeholder="Title" />
          <textarea name="note" placeholder="Write your note"></textarea>
          <Spacing top={37} />
          <Row justify="center">
            <ActionButton>Save note</ActionButton>
          </Row>
        </form>
      </Styles.Container>
    </Template>
  );
};
