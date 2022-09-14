import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/colors';

export const GlobalStyles = createGlobalStyle`
* {
   box-sizing: border-box;
   margin:0px;
   padding: 0px;
}

body{
    background-color: ${COLORS.background};
    
}

input, textarea, button,p {
  font-family: 'Montserrat', sans-serif;
}

a{
  text-decoration: none;
}

`;
