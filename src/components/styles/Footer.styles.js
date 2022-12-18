import styled from "styled-components";

export const FooterContainer = styled.footer`
  gap: 1rem;
  background-color: #600227;
  height: 120px;
  width: 100%;
  
`;
export const FooterSocial = styled.div`
  border-radius: 5px;
  gap: 2rem;
  font-size: 1.3rem;
  justify-content: center;
  display: flex;
  margin-top: -2rem;

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
  width: 100%;
  color: #eee;
  padding: 3rem 1rem;
  justify-content: center;
  display: flex;

  p {
    margin-top: -1rem;
  }
`;
