import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

const Container = styled.button`
  background-color: ${COLORS.primary};
  color: #fff;

  font-weight: 600;
  border: none;
  outline: none;

  height: 40px;
  width: 161px;
  border-radius: 40px;

  transition: 0.3s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.6);
  }
`;

export const Styles = {
  Container,
};
