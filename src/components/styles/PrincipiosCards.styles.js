import styled from "styled-components";

export const ContainerPrincipios = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;

 
`;
export const CardPrincipios = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgb(0, 0, 2, 0.2);
  padding: 0;
  background-color: azure;
  font-weight: 400;
  line-height: 2rem;
  font-size: 1.1rem;
  width: 30rem;
  height: auto;
  padding: 0.5rem;
  margin: 1rem;
 

  h3 {
    background-color: #600227;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border-radius: 15px 15px 0 0;
    color: white;

    @media ((min-width: 220px) and (max-width: 780px)) {
      font-size: 0.8rem;
    }
  }

  p {
    border: 1px solid #600227;
    padding: 1rem;
  }

  @media ((min-width: 220px) and (max-width: 780px)) {
    width: 90vw;
    font-size: 0.6rem;
    line-height: 1.5rem;
  }
`;

export const PrincipiosTitle = styled.div `
text-align: center;
margin: 3rem;
font-family: 'Lobster Two', cursive;
font-size: 1.5rem;

h2{
  font-weight: lighter;
}


@media ((min-width: 220px) and (max-width: 1000px)) {
    font-size: .8rem;
    margin: 1rem;
    
  }
`
