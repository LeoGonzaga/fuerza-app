import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const Container = styled.div`
  display: flex;
`;

const Wires = styled.div`
  width: 11px;
  height: 200px;
  background-color: ${COLORS.blue};
  z-index: 10;
`;

const Content = styled.div<{ dark?: boolean }>`
  width: 145px;
  height: 200px;
  background-color: ${(props) =>
    props.dark ? COLORS.darkBlue : COLORS.lightBlue};
  mix-blend-mode: normal;
  box-shadow: inset -2px -2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px 16px 16px 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
  }
`;

export const Styles = {
  Container,
  Wires,
  Content,
};
