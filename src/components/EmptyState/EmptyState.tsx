import React from 'react';
import { Styles } from './styles';

import Empty from '../../assets/empty.svg';
import Spacing from '../Spacing';
import LinkButton from '../Buttons/LinkButton';
import { ROUTES } from '../../constants/routes';
import Text from '../Text';

type EmptyStateProps = {
  showText?: boolean;
};

export const EmptyState = ({
  showText = false,
}: EmptyStateProps): JSX.Element => {
  return (
    <Styles.Container>
      {showText && (
        <Text fontType size={24}>
          HTML
        </Text>
      )}

      <Spacing top={66} />
      <img src={Empty} alt="" />
      <Spacing top={130} />
      <LinkButton
        text="Create a journal"
        route={ROUTES.CREATE_JOURNAL}
        bold
        size={14}
      />
    </Styles.Container>
  );
};
