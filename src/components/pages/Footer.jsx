
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FooterContainer, FooterSocial, FooterStyled,  } from "../styles/Footer"



function Footer () {
  return (
    <FooterContainer>
          <FooterSocial>
        <a href="https://www.linkedin.com/in/daianeanjos/" className="linkedin"><FaLinkedinIn/></a>  
        <a href="https://github.com/daianedosanjos" className="github"><FaGithub/></a>  
        <a href="https://www.instagram.com/daianeanjos.sep/" className="instagram"><FaInstagram/></a> 
        </FooterSocial>
	    <FooterStyled>
        <p>Copyright 2022 © Todos os direitos reservados - Desenvolvido por Daiane dos Anjos</p>                  
        </FooterStyled>
    </FooterContainer>
  )
}    
export default Footer;