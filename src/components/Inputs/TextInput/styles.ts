import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FadeInAnimation } from '../../../themes/animations';
import { PLACEHOLDER_COLOR } from '../../../themes/utils';

const Container = styled.div<{ focus?: boolean; error: boolean }>`
  height: 40px;
  background-color: #fff;
  border: ${(props) =>
    props.error ? '1px solid red' : '1px solid rgba(157, 164, 166, 0.07)'};
  border-radius: 4px;
  label {
    animation: ${FadeInAnimation} 0.2s ease-in-out;
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    color: ${COLORS.label};
    padding: 7px 6px;
    cursor: none;
  }
  input {
    height: ${(props) => (props.focus ? '18px' : '40px')};
    width: 100%;
    padding: ${(props) => (props.focus ? '7px 5px' : '0px 12px')};
    font-weight: ${(props) => (props.focus ? 'initial' : 'bold')};
    color: ${COLORS.primary};
    outline: none;
    border: none;
    font-size: 12px;
    animation: ${FadeInAnimation} 0.2s ease-in-out;
    ${PLACEHOLDER_COLOR}
  }

  span {
    font-size: 12px;
    color: red;
    padding: 10px 0px 0px 10px;
  }

  &:focus {
    box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.01);
    filter: drop-shadow(0px 0px 4px #b8e5e3) drop-shadow(0px 0px 2px #b8e5e3);
  }
`;

export const Styles = {
  Container,
};
