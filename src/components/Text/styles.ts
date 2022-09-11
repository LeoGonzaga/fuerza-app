import styled from 'styled-components';

const Container = styled.p<{
  bold?: boolean;
  size?: number;
  color?: string;
}>`
  font-size: ${(props) => (props.size ? `${props.size}px` : '14px')};
`;

export const Styles = {
  Container,
};
