import styled from 'styled-components';
import { FadeInAnimation } from '../../themes/animations';

const Container = styled.div`
  form {
    animation: ${FadeInAnimation} 0.5s ease-in-out;
    width: 320px;

    display: flex;
    flex-direction: column;
    img {
      width: 206px;
    }
  }
`;

export const Styles = {
  Container,
};
