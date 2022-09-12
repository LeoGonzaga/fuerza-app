import React from 'react';
import { Styles } from './styles';

export const TextInput = (): JSX.Element => {
  return (
    <Styles.Container>
      <span>Your password</span>
      <input type="text" placeholder="Your username" />
    </Styles.Container>
  );
};
