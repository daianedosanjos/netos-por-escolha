import styled from "styled-components";

export const ContatoContainer = styled.section`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h2 {
    @media (min-width: 280px) and (max-width: 780px) {
      font-size: 1rem;
    }
  }
`;

export const Img = styled.div`
  img {
    width: 300px;
    margin-top: 5rem;
  }
`;
export const RedesSociais = styled.div`
  margin-top: 2rem;
  gap: 5rem;

  a {
    margin: 2rem;
  }
`;
