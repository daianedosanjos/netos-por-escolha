import styled from "styled-components";

export const ComoAjudarContainer = styled.section`
  margin: rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #600227;
    font-size: 1.3rem;
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #600227;
    font-size: 1.5rem;
    width: 70rem;
    margin-left: 11rem;
    text-align: center;
  }
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  img {
    width: 400px;
  }

  .comoAjudar-cards {
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
    padding: 1em;
    margin-top: 5rem;
    width: 30rem;
    height: 15rem;
    background-color: azure;
    justify-content: center;
  }

  p {
    width: 25rem;
    height: 11rem;
    line-height: 1.8rem;
    font-size: 1.2rem;
    margin: 2rem 2rem 0rem 2rem;
    text-align: center;
  }
`;

export const LinkButton = styled.div`
  margin-top: -3.5rem;
  margin-left: 9rem;
  background-color: #600227;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 2rem;
  border-radius: 5rem;
  transition: background-color, transform 0.8s;

  :hover {
    background-color: #b72a6e;
    transform: scale(1.01);
  }

  .link {
    color: white;
  }
`;
export const AjudaFinanceira = styled.section`
  padding: -2rem;
  gap: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
  padding: 1rem;
  margin-top: 20rem;
  width: 30rem;
  height: 15rem;
  margin: 2rem 20rem 5rem 32rem;
  justify-content: center;
  align-items: center;
  background-color: azure;

  p {
    line-height: 0.1rem;
    font-size: 1rem;
    margin-top: 2rem;
    text-align: center;
  }
`;
