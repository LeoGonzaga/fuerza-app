import React from 'react';
import { Styles } from './styles';

type TextProps = {
  children: React.ReactNode;
  size?: number;
  color?: string;
  bold?: boolean;
};

export const Text = ({
  children,
  size,
  bold,
  color,
}: TextProps): JSX.Element => {
  return (
    <Styles.Container size={size} color={color} bold={bold}>
      {children}
    </Styles.Container>
  );
};
