import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: 0;
        outline: none;
    }

    *{
        font-family: 'Roboto', sans-serif;
    }
`

export default GlobalStyle