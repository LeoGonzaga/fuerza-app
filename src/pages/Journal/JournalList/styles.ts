import styled from 'styled-components';
import { FadeInAnimation } from '../../../themes/animations';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px 22px;
  gap: 30px;

  overflow-y: auto;
  overflow-x: hidden;

  animation: ${FadeInAnimation} 0.2s ease-in-out;
`;

export const Styles = {
  Container,
};
