import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import Text from '../Text';
import { Styles } from './styles';

type CoverProps = {
  dark?: boolean;
  title: string;
};

export const Cover = ({ dark, title }: CoverProps): JSX.Element => {
  return (
    <Link
      to={{
        pathname: ROUTES.POST_LIST,
      }}
    >
      <Styles.Container>
        <Styles.Wires />
        <Styles.Content dark={dark}>
          <Text fontType size={24} color={dark ? '#fff' : '#000'}>
            {title}
          </Text>
        </Styles.Content>
      </Styles.Container>
    </Link>
  );
};
