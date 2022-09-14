import React from 'react';
import { Styles } from './styles';

type ActionButtonProps = {
  children: React.ReactNode;
  onClick: (event?: any) => void;
};

export const ActionButton = ({
  children,
  onClick,
}: ActionButtonProps): JSX.Element => {
  return <Styles.Container onClick={onClick}>{children}</Styles.Container>;
};
