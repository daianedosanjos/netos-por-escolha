import doacao from "../../img/doacao.png";
import { Link } from "react-router-dom";

import {
  LinkButton,
  Card,
  ContainerComoAjudar,
  ContainerCards,
} from "../styles/ComoAjudar.styles";
import Contato from "./Contato";

function ComoAjudar() {
  return (
    <ContainerComoAjudar>
  <h2>
    Confira as diversas formas de ajudar o Netos por Escolha e manter este projeto em andamento.
  </h2>
  <div>
    <img src={doacao} alt="Imagem Ilustrativa" />
  </div>
  <ContainerCards>
    <Card>
      <h3>Torne-se um Voluntário</h3>
      <p>
        Seja voluntário! Clique abaixo para oferecer ajuda e fazer a diferença.
      </p>
      <LinkButton>
        <a href="https://wa.me/5571999444234" target="_blank">
          CADASTRE-SE
        </a>
      </LinkButton>
    </Card>
    <Card>
      <h3>Doações de Materiais</h3>
      <p>
        Colabore com doações de materiais. Clique abaixo para ver a lista completa.
      </p>
      <LinkButton>
        <Link to="/doacoes">
          VER LISTA
        </Link>
      </LinkButton>
    </Card>
    <Card>
      <h3>Apoio Financeiro</h3>
      <p>
        Contribua financeiramente. Clique abaixo e veja como.
      </p>
      <LinkButton>
        <a href="https://nubank.com.br/pagar/2a532/m8KbZtMBXn?fbclid=PAAaZK-bfCPfQ-Q0kO3LLVZxfsA8hkMesXEXXM5v-f2G1S9uBdV8tH9Owh-Ik_aem_AdFuW_d5Jrr1qa2n7e_3OMuCNDHpwzKJCNX_bzZ7h_hFl0fbEJHLlVq78fFgAu16KWY" target="_blank">
          CONTRIBUIR AGORA
        </a>
      </LinkButton>
    </Card>
  </ContainerCards>
  <Contato />
</ContainerComoAjudar>
  );
}

export default ComoAjudar;
