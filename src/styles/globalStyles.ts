import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  #root {
    background-color: rgb(240, 241, 243);
  }
`;

export default GlobalStyle;
