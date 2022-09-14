import React from 'react';
import Text from '../Text';
import { Styles } from './styles';

type CoverProps = {
  dark?: boolean;
};

export const Cover = ({ dark }: CoverProps): JSX.Element => {
  return (
    <Styles.Container>
      <Styles.Wires />
      <Styles.Content dark={dark}>
        <Text fontType size={24} color={dark ? '#fff' : '#000'}>
          Javascript maior
        </Text>
      </Styles.Content>
    </Styles.Container>
  );
};
