import React from "react";
import doacao from "../img/doacao.png";
import IrParaTopo from "./IrParaTopo";
import { Link } from "react-router-dom";

import {
  Container,
  ComoAjudarContainer,
  LinkButton,
  Card,
} from "../styles/ComoAjudar.styles";
import Contato from "./Contato";

function ComoAjudar() {
  return (
    <ComoAjudarContainer>
      <h2>
        Veja aqui as várias maneiras que você tem para ajudar o Netos por
        Escolha a continuar com esse projeto.
      </h2>
      <div>
        <img src={doacao} alt="" />
      </div>
      <Container>
        <Card>
          <h4>SEJA UM VOLUNTÁRIO</h4>
          <p>
            Seja voluntário! Clique abaixo e cadastre-se para oferecer sua ajuda
            e fazer a diferença.
          </p>
          <LinkButton>
            <a href="https://wa.me/5571999444234" target="_blank">
              CADASTRE-SE
            </a>
          </LinkButton>
        </Card>

        <Card>
          <h4> DOAÇÃO DE MATERIAL</h4>
          <p>
            Para contribuir com doações de materiais, clique no botão abaixo
            para acessar a lista completa
          </p>
          <LinkButton>
            <Link className="link" to="/doacoes">
              VEJA A LISTA
            </Link>
          </LinkButton>
        </Card>

        <Card>
          <h4>AJUDA FINANCEIRA</h4>
          <p>DADOS BANCÁRIOS</p>
          <p>Banco Nubank (0260)</p>
          <p>Agência: 0001</p>
          <p>Chave pix: netosporescolhasalvador@gmail.com</p>
        </Card>
      </Container>
      <Contato />
      <IrParaTopo />
    </ComoAjudarContainer>
  );
}

export default ComoAjudar;
