import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    margin: 0%;
    background-color: ${({theme}) => theme.colors.body};
    min-width: 100%;
    min-height: 100vh;
}
html {
    min-width: 100%;
    min-height: 100%;
}

`
export default GlobalStyles;