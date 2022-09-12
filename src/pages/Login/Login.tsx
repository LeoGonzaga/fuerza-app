import React from 'react';
import ActionButton from '../../components/Buttons/ActionButton';
import LinkButton from '../../components/Buttons/LinkButton';
import TextInput from '../../components/Inputs/TextInput';
import Spacing from '../../components/Spacing';
import TitlePageWithAction from '../../components/TitlePageWithAction';

import BG from '../../assets/bg.svg';
import Logo from '../../assets/logo.svg';
import { Styles } from './styles';
import Row from '../../components/Row';

export const Login = (): JSX.Element => {
  return (
    <Styles.Container>
      <img src={BG} alt="" />

      <form action="">
        <img src={Logo} alt="" />
        <Spacing top={78} />
        <TitlePageWithAction title="Sign In" route="/login" text="Sign Up" />
        <TextInput />
        <Spacing top={29} />
        <TextInput />
        <Spacing top={12} />

        <Row justify="flex-end">
          <LinkButton route={'route'} text="Forget Password?" />
        </Row>
        <Spacing top={40} />
        <Row justify="center">
          <ActionButton>Log In</ActionButton>
        </Row>
      </form>
    </Styles.Container>
  );
};
