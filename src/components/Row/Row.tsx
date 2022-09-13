import React from 'react';
import { Styles } from './styles';

type RowProps = {
  children: React.ReactNode;
  justify: string;
};

export const Row = ({ children, justify }: RowProps): JSX.Element => {
  return <Styles.Container justify={justify}>{children}</Styles.Container>;
};
