import React from "react";
import { CardPrinciples, Container } from "../styles/PrincipiosCards";

function PrincipiosCards() {
  return (
    <CardPrinciples>
      <Container>
        <h3 className=".principles-title-mission">MISSÃO</h3>
        <p >
          Nossa missão é levar amor, carinho e escuta para todos os idosos em
          Instituição de Longa Permanência que pudermos atuar ao longo dos anos.
          Prezando sempre pela transparência e atuação participativa dos
          voluntários
        </p>
      </Container>
      <Container className=".principles-title-vision">
        <h3 className="principios-title-visao">VISÃO</h3>
        <p >
        Permanecer sendo um grupo diverso, realizando o acompanhamento temporário das Instituições de Longa Permanência e adotando o maior número de vovôs e vovós ao longo desse caminho. 
        </p>
      </Container>
      <Container className="principiosCards-container">
        <h3 className=".principles-title-value">VALORES</h3>
        <p >
        Prezar sempre pela a civilidade e cordialidade na relação voluntário x idoso, voluntário x voluntário. Respeitar as diversidades sociais, raciais, de gênero, de crença e orientação sexual, de cada idoso e/ou voluntário.
        </p>
      </Container>
    </CardPrinciples>
  );
}

export default PrincipiosCards;
