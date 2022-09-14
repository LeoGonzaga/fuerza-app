import React from 'react';
import { Styles } from './styles';

import Empty from '../../assets/empty.svg';
import Spacing from '../Spacing';
import LinkButton from '../Buttons/LinkButton';
import Text from '../Text';

type EmptyStateProps = {
  showText?: boolean;
  text: string;
  note?: string;
  route: string;
};

export const EmptyState = ({
  showText = false,
  route,
  text,
  note,
}: EmptyStateProps): JSX.Element => {
  return (
    <Styles.Container>
      {showText && (
        <Text fontType size={24}>
          {note}
        </Text>
      )}

      <Spacing top={66} />
      <img src={Empty} alt="" />
      <Spacing top={130} />
      <LinkButton text={text} route={route} bold size={14} />
    </Styles.Container>
  );
};
