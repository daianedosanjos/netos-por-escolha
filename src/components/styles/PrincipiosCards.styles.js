import styled from "styled-components";

export const CardPrinciples = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  margin-top: 1rem;
  
`;
export const Container = styled.div`
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
  padding: 2rem;
  margin: 1rem;

h3{
  background-color: #600227;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem ;
  border-radius: 15px 15px 0 0;
  color: white;

  @media ((min-width: 220px) and (max-width: 780px)) {
    font-size: 1rem;
   
  }

  
}

p {
  border: 1px solid #600227;
;
  padding: 1rem;
}
 
  @media ((min-width: 220px) and (max-width: 780px)) {
	 width: 90vw;
   font-size: .9rem;
   line-height: 1.5rem;
  
   
  }

`
