import React from 'react';
import { COLORS } from '../../constants/colors';
import LinkButton from '../Buttons/LinkButton';
import Text from '../Text';
import { Styles } from './styles';

type TitlePageWithActionProps = {
  title: string;
  route: string;
  text: string;
};
export const TitlePageWithAction = ({
  route,
  title,
  text,
}: TitlePageWithActionProps): JSX.Element => {
  return (
    <Styles.Container>
      <Text size={32} color={COLORS.primary}>
        {title}
      </Text>

      <LinkButton route={route} text={text} bold />
    </Styles.Container>
  );
};
