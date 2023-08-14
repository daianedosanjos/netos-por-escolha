import styled from "styled-components";

export const ContainerQuemSomos = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
 

  @media ((min-width: 280px) and (max-width: 1000px)) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }

  img {
    border-radius: 15px;
    max-width: 90vw;
  }

  h3 {
    padding: 1rem;
    font-family: 'Lobster Two', cursive;
  }
`;

export const CardQuemSomos = styled.div`
  background-color: azure;
  padding: 2rem;
  line-height: 2.8rem;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  width: 95vw;
  margin: 1rem;

  @media ((min-width: 280px) and (max-width: 1000px)) {
    font-size: 0.8rem;
    line-height: 1.5rem;
    
  }
`;
