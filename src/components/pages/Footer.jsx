import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FooterContainer, FooterSocial } from "../styles/Footer.styles";

function Footer() {
  return (
    <FooterContainer>
      <div>
        <p>
          Copyright 2023 © Todos os direitos reservados 
        </p>
      </div>
      <div>
        <p>Desenvolvido por
          Daiane dos Anjos</p>
      </div>
      <FooterSocial>
        <a
          href="https://www.linkedin.com/in/daianeanjos/"
          target="_blank"
          className="linkedin"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/daianedosanjos"
          target="_blank"
          className="github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/daianeanjos.sep/"
          target="_blank"
          className="instagram"
        >
          <FaInstagram />
        </a>
      </FooterSocial>
    </FooterContainer>
  );
}
export default Footer;
