import styled from "styled-components";

export const ContainerComoAjudar = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;


  h2 {
    color: #600227;
    text-align: center;
    width: 90vw;
    font-family: 'Lobster Two', cursive;
    font-weight: lighter;
   
    @media ((min-width: 280px) and (max-width: 1000px)) {
      font-size: 1rem;
    }
  }

  img {
    width: 150px;
    margin: 3rem;
  }
`;

export const ContainerCards = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 0;
`;

export const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
  max-width: 30rem; 
  height: 15rem;
  background-color: azure;
  text-align: center;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 90vw;

  p {
    font-size: 1.5rem;
  }

  h3 {
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-family: 'Lobster Two', cursive;
  }

  @media ((min-width: 280px) and (max-width: 1000px)) {
    width: 92vw;

    p {
      font-size: 1rem;
    }
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
