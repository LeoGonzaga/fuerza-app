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
import useSignUp from './useSignUp';

export const SignUp = (): JSX.Element => {
  const {
    email,
    password,
    username,
    handleChangeEmail,
    handleChangePassword,
    handleChangeUsername,
    handleSubmit,
    errors,
  } = useSignUp();

  return (
    <Template center>
      <Styles.Container>
        <form action="">
          <Logo size={206} />
          <Spacing top={78} />
          <TitlePageWithAction
            title="Sign Un"
            route={ROUTES.SIGN_IN}
            text="Already have an account"
          />
          <TextInput
            placeholder="Define a username"
            value={username}
            onChange={handleChangeUsername}
            error={errors.username}
          />
          <Spacing top={29} />
          <TextInput
            placeholder="Set your password"
            type="password"
            value={password}
            onChange={handleChangePassword}
            error={errors.password}
          />
          <Spacing top={29} />
          <TextInput
            placeholder="Email (optinal)"
            value={email}
            onChange={handleChangeEmail}
          />
          <Spacing top={12} />

          <Row justify="flex-end">
            <LinkButton route={'route'} text="Forget Password?" />
          </Row>
          <Spacing top={40} />
          <Row justify="center">
            <ActionButton onClick={handleSubmit}>Create account</ActionButton>
          </Row>
        </form>
      </Styles.Container>
    </Template>
  );
};
