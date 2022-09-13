import React from 'react';
import { Styles } from './styles';

import Empty from '../../../../assets/empty.svg';
import LinkButton from '../../../../components/Buttons/LinkButton';
import Spacing from '../../../../components/Spacing';

export const EmptyState = (): JSX.Element => {
  return (
    <Styles.Container>
      <img src={Empty} alt="" />
      <Spacing top={70} />
      <LinkButton text="Create a journa" route="/" bold size={14} />
    </Styles.Container>
  );
};
