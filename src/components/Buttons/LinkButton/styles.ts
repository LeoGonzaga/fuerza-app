import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

const Container = styled.div<{ bold?: boolean; size?: number }>`
  p {
    text-decoration: underline;
    color: ${COLORS.primary};
    font-weight: ${(props) => (props.bold ? '600' : 'initial')};
    font-size: ${(props) => (props.size ? `${props.size}px` : '12px')};
    cursor: pointer;
  }
`;

export const Styles = {
  Container,
};
