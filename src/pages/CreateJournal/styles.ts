import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 36px;
  }

  span {
    position: absolute;
    top: 50%;
  }

  input {
    margin-bottom: 42px;
    background: rgba(255, 255, 255, 0.42);
    border: 1px solid rgba(157, 164, 166, 0.07);
    border-radius: 4px;
    height: 40px;
    width: 320px;
    outline: none;
  }
`;

export const Styles = {
  Container,
};
