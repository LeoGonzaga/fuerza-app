import styled from 'styled-components';

const Container = styled.p<{
  bold?: boolean;
  size?: number;
  color?: string;
}>`
  font-size: ${(props) => (props.size ? `${props.size}px` : '14px')};
  color: ${(props) => (props.color ? props.color : 'initial')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'initial')};
`;

export const Styles = {
  Container,
};
