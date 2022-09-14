import React from 'react';
import Text from '../Text';
import { Styles } from './styles';

type NotesProps = {
  content: string;
};

export const Notes = ({ content }: NotesProps): JSX.Element => {
  return (
    <Styles.Container>
      <Text>{content}</Text>
    </Styles.Container>
  );
};
