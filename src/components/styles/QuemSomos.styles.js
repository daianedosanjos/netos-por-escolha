import styled from "styled-components";

export const ContainerWhoWeAre = styled.section`
  line-height: 2.4rem;
  font-size: 1.4rem;

  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ((min-width: 280px) and (max-width: 720px)) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }

  img {
    border-radius: 15px;
    max-width: 90vw;
  }

  h3 {
    padding: 1rem;
    text-align: center;
  }
`;

export const HowItAllBegan = styled.div`
  background-color: azure;
  padding: 2rem;
  margin: 1rem;

  @media ((min-width: 280px) and (max-width: 720px)) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`;

export const HowWeAct = styled.div`
  background-color: azure;
  padding: 2rem;
  margin: 1rem;

  @media ((min-width: 280px) and (max-width: 780px)) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`;

export const ContainerDivs = styled.div`
  @media ((min-width: 280px) and (max-width: 780px)) {
    margin: auto;
  }
`;
