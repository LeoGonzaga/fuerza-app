import { keyframes } from 'styled-components';

export const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const LeftToRightAnimtion = keyframes`  
  from {transform: translateX(-100px); }
  to { transform:translateX(0px);  }
`;
