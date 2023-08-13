import React from "react";
import FotoCoracao from "../../img/coracao.png";
import IrParaTopo from "./IrParaTopo";
import { ContatoContainer, Img, RedesSociais } from "../styles/Contato.styles";
import { InstagramLogo, WhatsappLogo } from "phosphor-react";

function Contato() {
  return (
    <ContatoContainer>
      <div>
        <h2>
          Para obter mais informações sobre doações, voluntariado, projetos,
          parcerias, patrocínios e outros assuntos, entre em contato conosco por
          meio dos nossos contatos
        </h2>
      </div>
      <RedesSociais>
          <a href="https://www.instagram.com/netosporescolha/" target="_blank">
            <InstagramLogo size={60} color="#b72a6e" weight="bold" />
          </a>
          <a href="https://wa.me/5571999444234" target="_blank">
            <WhatsappLogo size={60} color="#2ab73a" weight="bold" />
          </a>
        </RedesSociais>
  
        <Img>
          <img width={800}
            src={FotoCoracao}
            alt="foto dos voluntários do Netos por Escolha"
          />
        </Img>

      
    
      <IrParaTopo />
    </ContatoContainer>
  );
}
export default Contato;
