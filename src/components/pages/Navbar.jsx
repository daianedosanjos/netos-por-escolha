
import {
  NavbarContainer, 
  Logo
} from "../styles/Navbar.styles";
import LogoImg from "../../img/logo.jpg";

function Navbar() {


  return (
    <NavbarContainer>
      <h3>NETOS POR ESCOLHA</h3>     
          <Logo src={LogoImg} alt="Logo"></Logo>       
    </NavbarContainer>
  );
}

export default Navbar;