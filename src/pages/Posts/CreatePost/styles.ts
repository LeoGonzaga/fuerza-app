import styled from 'styled-components';
import { PLACEHOLDER_COLOR } from '../../../themes/utils';

const Container = styled.div`
  height: 100%;
  padding: 0px 22px;

  display: flex;
  flex-direction: column;

  input,
  textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.42);
    border: 1px solid rgba(157, 164, 166, 0.07);
    border-radius: 4px;
    padding: 13px;
    font-size: 12px;
    outline: none;
    font-weight: 600;
    ${PLACEHOLDER_COLOR};
  }

  input {
    height: 40px;
    margin-bottom: 28px;
    margin-top: 49px;
  }

  textarea {
    height: 40vh;
  }
`;

const Header = styled.div`
  width: 100%;
`;

export const Styles = {
  Container,
  Header,
};
