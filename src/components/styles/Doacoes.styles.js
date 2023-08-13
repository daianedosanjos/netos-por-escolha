import styled from "styled-components";

export const DoacaoContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70rem;

  h2{
    margin-bottom: 1rem;
    margin-top: 5rem;
    text-align: center;
    padding: .8rem;

    @media ((min-width: 280px) and (max-width: 780px)) {
      font-size: 1.1rem;
    }
  }
  }

  h4 {
    margin-top: 2rem;
    text-align: center;
  }
`;

export const Lista = styled.section`
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
  line-height: 2rem;
  background-color: azure;
  padding: 2rem;
`;
