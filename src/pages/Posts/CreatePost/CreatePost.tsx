import React from 'react';
import BackButton from '../../../components/BackButton';
import ActionButton from '../../../components/Buttons/ActionButton';
import Header from '../../../components/Header';
import Row from '../../../components/Row';
import Spacing from '../../../components/Spacing';
import Template from '../../../components/Template';
import { ROUTES } from '../../../constants/routes';
import { useBearStore } from '../../../store/user';
import { Styles } from './styles';
import useCreatePost from './useCreatePost';

function BearCounter() {
  const bears = useBearStore((state: any) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore(
    (state: any) => state.increasePopulation
  );
  return <button onClick={increasePopulation}>one up</button>;
}

export const CreatePost = (): JSX.Element => {
  const { handleChangeNote, handleChangeTitle, note, title, handleSubmit } =
    useCreatePost();
  return (
    <Template>
      <BearCounter />
      <Controls />
      <Header />
      <Styles.Header>
        <BackButton route={ROUTES.POST_LIST} />
      </Styles.Header>
      <Styles.Container>
        <form action="">
          <input
            type="text"
            placeholder="Title"
            onChange={handleChangeTitle}
            value={note}
          />
          <textarea
            name="note"
            placeholder="Write your note"
            onChange={handleChangeNote}
            value={title}
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
