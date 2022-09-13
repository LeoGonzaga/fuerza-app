import styled from 'styled-components';

const Container = styled.div<{ center?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.center ? 'center' : 'unset')};
  height: 100vh;
  overflow: hidden;

  > img {
    position: fixed;
    z-index: -1;
    left: 0px;
    top: 70px;
  }
`;

export const Styles = {
  Container,
};
