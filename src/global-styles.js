import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: "Raleway", sans-serif;
    background-color: #010101;
    color: #ffffff;
    padding: 20px 40px;

    @media screen and (max-width: 800px){
        padding: 10px;

    }
}

a {
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;
