import React from 'react';
import { Styles } from './styles';

type ActionButtonProps = {
  children: React.ReactNode;
};

export const ActionButton = ({ children }: ActionButtonProps): JSX.Element => {
  return <Styles.Container>{children}</Styles.Container>;
};
