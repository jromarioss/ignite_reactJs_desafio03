import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme['base-text']};
    background-color: ${props => props.theme['base-background']};
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smmothing: antialiased;
  }
`;