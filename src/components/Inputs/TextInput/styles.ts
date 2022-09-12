import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

const Container = styled.div`
  height: 40px;
  background-color: #fff;

  span {
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    color: ${COLORS.label};
    padding: 7px 6px;
  }
  input {
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgba(157, 164, 166, 0.07);
    color: ${COLORS.primary};
    padding: 0px 12px;
    outline: none;
    font-size: 12px;
    &:focus {
      box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.01);
      filter: drop-shadow(0px 0px 4px #b8e5e3) drop-shadow(0px 0px 2px #b8e5e3);
    }
  }
`;

export const Styles = {
  Container,
};
