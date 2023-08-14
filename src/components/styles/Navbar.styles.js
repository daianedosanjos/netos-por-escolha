import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 4rem;
  background-color: #600227;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:azure; 
  margin: auto;
  padding: 4rem;
  

  
  @media (min-width: 280px) and (max-width: 1000px) {
      padding: 2rem;

     h3{
      font-size: 1rem;
     }
  }  

`;


export const Logo = styled.img`
  height: 130px;
  border-radius: 50%;
 

     @media (min-width: 220px) and (max-width: 700px) {
      height: 100px;
      margin-top: 3rem;
  }  

`;