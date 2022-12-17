import styled from "styled-components";

export const CardPrinciples = styled.section`
  padding: 2rem;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 2rem;
`;
export const Container = styled.div`
  gap: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgb(0, 0, 2, 0.2);
  padding: 1rem;
  margin-top: -10rem;
  background-color: azure;

  .principles-title-mission {
    background-color: #d5305d;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .principles-title-visao {
    background-color: #f7a600;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .principles-title-value {
    background-color: #a0b829;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    width: 25rem;
    height: 11rem;
    line-height: 1.8rem;
    font-size: 1.2rem;
    margin-top: 2rem;
  }
`;
