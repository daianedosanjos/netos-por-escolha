import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.styles";
import LogoImg from "../../img/logo.jpg";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const toggleNavbar = () => {
    setExtendNavbar((curr) => !curr);
  };

  const closeNavbar = () => {
    setExtendNavbar(false);
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/" onClick={closeNavbar}>
              Home
            </NavbarLink>
            <NavbarLink to="/quemsomos" onClick={closeNavbar}>
              Quem somos
            </NavbarLink>
            <NavbarLink to="/comoajudar" onClick={closeNavbar}>
              Como ajudar
            </NavbarLink>
            <OpenLinksButton onClick={toggleNavbar}>
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg} alt="Logo"></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/" onClick={closeNavbar}>
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/quemsomos" onClick={closeNavbar}>
            Quem somos
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/comoajudar" onClick={closeNavbar}>
            Como ajudar
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;