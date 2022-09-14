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
import useSignIn from './useSignIn';

export const SignIn = (): JSX.Element => {
  const {
    username,
    password,
    handleChangeUsername,
    handleChangePassword,
    handleSubmit,
    errors,
  } = useSignIn();

  return (
    <Template center>
      <Styles.Container>
        <form onSubmit={handleSubmit}>
          <Logo size={206} />
          <Spacing top={78} />
          <TitlePageWithAction
            title="Sign In"
            route={ROUTES.SIGN_UP}
            text="Sign Up"
          />
          <TextInput
            placeholder="Your usename"
            value={username}
            onChange={handleChangeUsername}
            error={errors.username}
          />
          <Spacing top={29} />
          <TextInput
            placeholder="Your password"
            type="password"
            value={password}
            onChange={handleChangePassword}
            error={errors.password}
          />
          <Spacing top={12} />

          <Row justify="flex-end">
            <LinkButton route={'route'} text="Forget Password?" />
          </Row>
          <Spacing top={40} />
          <Row justify="center">
            <ActionButton onClick={handleSubmit}>Log In</ActionButton>
          </Row>
        </form>
      </Styles.Container>
    </Template>
  );
};
