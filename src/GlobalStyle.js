import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: ${props => props.dark ? props.theme.background.dark : props.theme.colors.secondary};
}
`;

export default GlobalStyle;