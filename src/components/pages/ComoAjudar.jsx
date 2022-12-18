import React from "react";
import doacao from "../img/doacao.png";
import IrParaTopo from "./IrParaTopo";
import { Link } from "react-router-dom";

import {
  AjudaFinanceira,
  Container,
  ComoAjudarContainer,
  LinkButton,
} from "../styles/ComoAjudar.styles";

function ComoAjudar() {
  return (
    <ComoAjudarContainer>
      <h3>
        Veja aqui as várias maneiras que você tem para ajudar o Netos por
        Escolha a continuar com esse projeto.
      </h3>
      <Container>
        <div className="comoAjudar-cards">
          <h4>SEJA UM VOLUNTÁRIO</h4>
          <p>
            Você pode ajudar tornado-se um voluntário, clique no botão abaixo e
            faça seu cadastro.
          </p>
          <LinkButton>
            <Link className="link" to="/cadastro">
              CADASTRE-SE
            </Link>
          </LinkButton>
        </div>

        <div>
          <img src={doacao} alt="" />
        </div>

        <div className="comoAjudar-cards">
          <h4> DOAÇÃO DE MATERIAL</h4>
          <p>Para doação de materias clique no botão abaixo e veja a lista.</p>
          <LinkButton>
            <Link className="link" to="/doacoes">
              VEJA A LISTA
            </Link>
          </LinkButton>
        </div>
      </Container>

      <AjudaFinanceira>
        <h4>AJUDA FINANCEIRA</h4>
        <p>DADOS BANCÁRIOS</p>
        <p>Banco Nubank (0260)</p>
        <p>Agência: 0001</p>
        <p>Chave pix: netosporescolhasalvador@gmail.com</p>
      </AjudaFinanceira>
      <IrParaTopo />
    </ComoAjudarContainer>
  );
}

export default ComoAjudar;
