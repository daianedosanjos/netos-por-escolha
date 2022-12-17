import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      transition:.5s;
    }
 
    
  }
  body {
    background: #fff;
   
  }
  
  a {
    text-decoration: none;
  }
  
  
  ul{
    list-style:none;
  }
 
`