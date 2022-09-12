import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  form {
    padding: 20px;
    width: 100%;
    max-width: 320px;

    display: flex;
    flex-direction: column;
  }

  > img {
    position: absolute;
    z-index: -1;
    left: 0px;
  }
`;

export const Styles = {
  Container,
};
