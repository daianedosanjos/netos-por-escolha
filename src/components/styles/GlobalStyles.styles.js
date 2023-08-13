import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
  }

       :-webkit-scrollbar {
       width: 5px;
       transition:.5s;
       background-color: #600227;      
        }  

body {
    background-color: #fffae7;
  }

  
a {
    text-decoration: none;
  }
  
  
  ul{
    list-style:none;
  }
 
`

