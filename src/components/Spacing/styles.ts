import styled from 'styled-components';

const Container = styled.div<{ bottom?: number; top?: number }>`
  margin-top: ${(props) => props.top && `${props.top}px`};
  margin-bottom: ${(props) => props.bottom && `${props.bottom}px`};
`;

export const Styles = {
  Container,
};
