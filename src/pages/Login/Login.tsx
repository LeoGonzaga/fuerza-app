import React from 'react';
import ActionButton from '../../components/Buttons/ActionButton';
import TextInput from '../../components/Inputs/TextInput';
import TitlePageWithAction from '../../components/TitlePageWithAction';
import { Styles } from './styles';

export const Login = (): JSX.Element => {
  return (
    <Styles.Container>
      <form action="">
        <TitlePageWithAction title="login" route="/login" text="logar" />
        <TextInput />
        <TextInput />
        <ActionButton>Log In</ActionButton>
      </form>
    </Styles.Container>
  );
};
