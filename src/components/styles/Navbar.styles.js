import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100vw;
  height: ${(props) => (props.extendNavbar ? "400px" : "100px")};
  background-color: #600227;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  position: fixed;

  /* @media (min-width: 380px) and (max-width: 700px) {
    height: 150px;
  } */
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 1%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  margin-top: 1rem;
`;

export const NavbarInnerContainer = styled.div`
  width: 98vw;
  height: 100%;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  `;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 15px;
  font-size: 1.3rem;

  :hover {
    border-bottom: 1px solid #f7a600;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin-bottom: ${(props) => (props.extendNavbar ? "" : "1rem")};

  :hover {
    border-bottom: 1px solid #f7a600;
  }
`;

export const Logo = styled.img`
  max-width: 180px;
  height: 130px;
  border-radius: 50%;
`;

export const Whatsapp = styled.img`
  max-width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  height: 40px;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${(props) => (props.extendNavbar ? "" : "2rem")};
  

  @media (min-width: 700px) {
    display: none;
   
  }
`;
