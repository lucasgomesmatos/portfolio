import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: #2D2E32;
    color: #fff;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    transition: .3s all;
  }

  body::-webkit-scrollbar {
  width: 2px;               
  }

  body::-webkit-scrollbar-thumb {
  background-color: #6ef3a5;        
  border: 3px solid transparent;  
  }

`;

export const Container = styled.div`
  max-width: 960px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 30px;
`;
