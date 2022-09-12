import styled from 'styled-components';

const Container = styled.div<{
  justify: string;
}>`
  display: flex;
  justify-content: ${(props) => props.justify};
`;

export const Styles = { Container };
