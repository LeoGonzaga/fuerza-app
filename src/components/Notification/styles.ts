import styled from 'styled-components';
import { FadeInAnimation, LeftToRightAnimtion } from '../../themes/animations';

const Container = styled.div<{ open: boolean; error: boolean }>`
  position: fixed;
  right: 10px;
  top: 20px;
  background-color: red;
  height: 70px;
  width: 80%;
  border-radius: 4px;

  display: ${(props) => (props.open ? 'flex' : 'none')};
  align-items: center;
  background-color: ${(props) => (props.error ? '#f27457' : '#47C2A6')};
  height: 52px;
  border-radius: 5px;
  padding: 18px 20px;
  animation: ${LeftToRightAnimtion} 0.4s ease-in-out,
    ${FadeInAnimation} 0.4s ease-in-out;
`;

export const Styles = { Container };
