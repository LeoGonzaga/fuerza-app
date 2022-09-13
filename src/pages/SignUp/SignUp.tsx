import React from 'react';
import ActionButton from '../../components/Buttons/ActionButton';
import LinkButton from '../../components/Buttons/LinkButton';
import TextInput from '../../components/Inputs/TextInput';
import Spacing from '../../components/Spacing';
import TitlePageWithAction from '../../components/TitlePageWithAction';

import { Styles } from './styles';
import Row from '../../components/Row';
import Logo from '../../components/Logo';
import Template from '../../components/Template';
import { ROUTES } from '../../constants/routes';

export const SignUp = (): JSX.Element => {
  return (
    <Template>
      <Styles.Container>
        <form action="">
          <Logo />
          <Spacing top={78} />
          <TitlePageWithAction
            title="Sign Un"
            route={ROUTES.SIGN_IN}
            text="Already have an account"
          />
          <TextInput placeholder="Your usename" />
          <Spacing top={29} />
          <TextInput placeholder="Your password" />
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
    </Template>
  );
};
