import styled from 'styled-components';

const Container = styled.p<{
  bold?: boolean;
  size?: number;
  color?: string;
  fontType?: boolean;
}>`
  font-size: ${(props) => (props.size ? `${props.size}px` : '14px')};
  color: ${(props) => (props.color ? props.color : 'initial')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'initial')};
  font-family: ${(props) =>
    props.fontType ? 'Abhaya Libre,serif' : 'initial'};
`;

export const Styles = {
  Container,
};
