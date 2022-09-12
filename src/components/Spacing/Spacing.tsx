import React from 'react';
import { Styles } from './styles';

type SpacingProps = {
  top?: number;
  bottom?: number;
};

export const Spacing = ({ bottom, top }: SpacingProps) => {
  return <Styles.Container bottom={bottom} top={top} />;
};
