import React from 'react';
import { Styles } from './styles';
import Plus from '../../../assets/plus.svg';
import Text from '../../Text';
import { COLORS } from '../../../constants/colors';
import { Link } from 'react-router-dom';

type OutlineButtonProps = {
  text?: string;
  route?: string;
};

export const OutlineButton = ({
  text,
  route,
}: OutlineButtonProps): JSX.Element => {
  return (
    <Link to={route || '/'}>
      <Styles.Container>
        <img src={Plus} alt="" />
        <Text size={14} bold color={COLORS.primary}>
          {text}
        </Text>
      </Styles.Container>
    </Link>
  );
};
