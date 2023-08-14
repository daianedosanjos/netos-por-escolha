import { CardPrincipios, ContainerPrincipios, PrincipiosTitle } from "../styles/PrincipiosCards.styles";


function PrincipiosCards() {
  return (
    <div>
      <PrincipiosTitle>
    <h2>Nossos Principios</h2>
    </PrincipiosTitle>
    <ContainerPrincipios>
      
      <CardPrincipios>
        <h3 className=".principles-title-mission">MISSÃO</h3>
        <p>
        Nossa missão é levar amor, carinho e atenção a todos os idosos em Instituições de Longa Permanência onde atuarmos ao longo dos anos. Prezamos pela transparência e atuação participativa dos voluntários.
        </p>
      </CardPrincipios>
      <CardPrincipios className=".principles-title-vision">
        <h3 className="principios-title-visao">VISÃO</h3>
        <p>
        Permanecer como um grupo diverso e comprometido, realizando o acompanhamento transitório de Instituições de Longa Permanência e proporcionando acolhimento a um número expressivo de idosos ao longo dessa jornada.
        </p>
      </CardPrincipios>
      <CardPrincipios className="principiosCards-container">
        <h3 className=".principles-title-value">VALORES</h3>
        <p>
        Prezar sempre pela civilidade e cordialidade nas relações entre voluntários e idosos, bem como entre voluntários. Respeitar as diversidades sociais, raciais, de gênero, de crença e orientação sexual de cada idoso e/ou voluntário.
        </p>
      </CardPrincipios>
    </ContainerPrincipios>
    </div>
  );
}

export default PrincipiosCards;
