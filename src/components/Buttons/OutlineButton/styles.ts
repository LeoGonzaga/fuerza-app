import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

const Container = styled.button`
  height: 40px;
  border: 1px solid ${COLORS.primary};
  background-color: transparent;
  border-radius: 24px;

  display: flex;
  align-items: center;
  padding: 12px;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.6);
  }
`;

export const Styles = { Container };
