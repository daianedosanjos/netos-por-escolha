import styled from "styled-components";

export const ComoAjudarContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  margin-top: 10rem;

  h2 {
    color: #600227;
    text-align: center;
    width: 90vw;

    @media ((min-width: 280px) and (max-width: 780px)) {
      font-size: 1.1rem;
    }
  }

  img {
    width: 150px;
    margin: 3rem;
  }
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  gap: 2rem;
`;

export const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
  width: 30rem;
  height: 15rem;
  background-color: azure;
  text-align: center;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 1.5rem;
  }

  @media ((min-width: 280px) and (max-width: 780px)) {
    width: 95vw;

    p {
      font-size: 1rem;
    }
  }

  h4 {
    margin-bottom: 1rem;
  }
`;

export const LinkButton = styled.button`
  background-color: #600227;
  width: 10rem;
  height: 2rem;
  border-radius: 5px;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color, transform 0.8s;

  a {
    color: white;
  }

  :hover {
    background-color: #b72a6e;
    transform: scale(1.01);
  }

  .link {
    color: white;
  }
`;
