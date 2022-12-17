import React from "react";
import doacao from "../img/doacao.png";
import IrParaTopo from "./IrParaTopo";
import { Link } from "react-router-dom";

import { AjudaFinanceira, Container, HowToHelp } from "../styles/ComoAjudar";

function ComoAjudar() {
  return (
    <HowToHelp>
      <h3>
        Seja bem vindo ao nosso time! Veja aqui o que você pode fazer para nos
        ajudar: .
      </h3>
      <Container>
        <div className="comoAjudar-cards">
          <h4>SEJA UM VOLUNTÁRIO</h4>
          <p>
            Para se tornar um voluntário, clique no botão abaixo e se inscreva
            através do formulario.
          </p>
          <div className="link">
            <Link to="/cadastro">CADASTRE-SE</Link>
          </div>
        </div>

        <div>
          <img src={doacao} alt="" />
        </div>

        <div className="comoAjudar-cards">
          <h4> DOAÇÃO DE MATERIAL</h4>
          <p>
            Para doação de materias clique no botão abaixo e veja nossa lista{" "}
          </p>
          <div className="link">
            <Link to="/doacao">VEJA A LISTA</Link>
          </div>
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
    </HowToHelp>
  );
}

export default ComoAjudar;
