import React from 'react';
import { Styles } from './styles';

import BackArrow from '../../assets/back_arrow.svg';
import Text from '../Text';

export const BackButton = (): JSX.Element => {
  return (
    <Styles.Container>
      <button>
        <img src={BackArrow} alt="" />
      </button>
      <Text fontType size={24} bold>
        HTML
      </Text>
    </Styles.Container>
  );
};
