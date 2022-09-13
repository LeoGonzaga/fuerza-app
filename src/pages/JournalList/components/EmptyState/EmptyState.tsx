import React from 'react';
import { Styles } from './styles';

import Empty from '../../../../assets/empty.svg';
import LinkButton from '../../../../components/Buttons/LinkButton';
import Spacing from '../../../../components/Spacing';
import { ROUTES } from '../../../../constants/routes';

export const EmptyState = (): JSX.Element => {
  return (
    <Styles.Container>
      <img src={Empty} alt="" />
      <Spacing top={70} />
      <LinkButton
        text="Create a journal"
        route={ROUTES.CREATE_JOURNAL}
        bold
        size={14}
      />
    </Styles.Container>
  );
};
