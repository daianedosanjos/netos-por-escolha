import styled from "styled-components";

export const DoacaoContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;


  h2{
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: center;
    padding: .8rem;
    font-family: 'Lobster Two', cursive;
    font-weight: lighter;
  }

    @media ((min-width: 280px) and (max-width: 1000px)) {
      font-size: .8rem;
    }
  
  

  h3 {
    margin-top: 2rem;
    text-align: center;
    padding: .8rem;
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
