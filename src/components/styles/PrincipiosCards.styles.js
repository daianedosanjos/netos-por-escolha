import styled from "styled-components";

export const CardPrinciples = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  margin-top: 5rem;
  
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
  height: 20rem;
  padding: 2rem;
  margin: 1rem;

h3{
  background-color: #600227;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 15px;
  color: white;
  
}

p {
  border: 1px solid #600227;
;
  padding: 1rem;
}
 
  @media ((min-width: 319px) and (max-width: 450px)) {
	 width: 90vw;
   font-size: .9rem;
   line-height: 1.5rem;
  
   
  }

`
