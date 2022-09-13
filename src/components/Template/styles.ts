import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  > img {
    position: absolute;
    z-index: -1;
    left: 0px;
  }
`;

export const Styles = {
  Container,
};
