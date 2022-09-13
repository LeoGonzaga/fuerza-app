import React from 'react';
import { Styles } from './styles';

type TextProps = {
  children: React.ReactNode;
  size?: number;
  color?: string;
  bold?: boolean;
  fontType?: boolean;
};

export const Text = ({
  children,
  size,
  bold,
  color,
  fontType,
}: TextProps): JSX.Element => {
  return (
    <Styles.Container fontType={fontType} size={size} color={color} bold={bold}>
      {children}
    </Styles.Container>
  );
};
