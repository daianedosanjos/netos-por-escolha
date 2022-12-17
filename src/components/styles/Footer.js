import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #600227;
  height: 60px;
  padding:0;
  width: 100%
    
`;
export const FooterSocial = styled.div`
  margin-left: 30rem;
  border-radius: 5px;
  gap: 2rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;

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
export const FooterStyled = styled.footer`
  width: 100vw;
  color: #eee;
  padding: 3rem 1rem;
`;
