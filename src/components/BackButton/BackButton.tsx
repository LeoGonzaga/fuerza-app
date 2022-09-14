import React from 'react';
import { Styles } from './styles';

import BackArrow from '../../assets/back_arrow.svg';
import Text from '../Text';
import { Link } from 'react-router-dom';

type BackButtonProps = {
  route: string;
};

export const BackButton = ({ route }: BackButtonProps): JSX.Element => {
  return (
    <Link to={route}>
      <Styles.Container>
        <button>
          <img src={BackArrow} alt="" />
        </button>
        <Text fontType size={24} bold>
          HTML
        </Text>
      </Styles.Container>
    </Link>
  );
};
