import styled from "styled-components";

export const ContatoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: auto;

  h2 {

    margin-top: .5rem;

    @media (min-width: 280px) and (max-width: 780px) {
      font-size: 1rem;
    }
  }
`;

export const Img = styled.div`
  img {
    width: 280px;
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
