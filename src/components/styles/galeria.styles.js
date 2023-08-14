import styled from "styled-components";

export const Carrossel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 250px;
  height: 100%;
  margin: 1rem;

  img {
    width: 250px;
    height: auto;
  }
`;

export const CarrosselTitle = styled.div `
 h2{
    font-family: 'Lobster Two', cursive;
    font-weight: lighter;
    font-size: 2rem;
     text-align: center;
  }
`