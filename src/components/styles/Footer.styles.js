import styled from "styled-components";

export const FooterContainer = styled.footer`
  gap: 1rem;
  background-color: #600227;
  height: 120px;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;  
  align-items: center;
  flex-direction: column;
  color: white;
  padding: 1rem;

  @media ((min-width: 319px) and (max-width: 450px)) {
	 font-size: .7rem;   
  }
 
  
`;
export const FooterSocial = styled.div`
  border-radius: 5px;
  gap: 2rem;
  font-size: 1.3rem;
  justify-content: center;
  display: flex;

 
 

  .linkedin {
    :hover {
      background: #0072b1;
    }

    svg {
      color: #fff;
    }
  }

  .github {
    :hover {
      background: #111;
    }

    svg {
      color: #fff;
    }
  }

  .instagram {
    :hover {
      background: #bc2a8d;
    }

    svg {
      color: #fff;
    }
  }
`;
