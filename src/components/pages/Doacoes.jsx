import { Link } from "react-router-dom";
import { DoacaoContainer, Lista } from "../styles/Doacoes.styles";
import { LinkButton } from "../styles/ComoAjudar.styles";

function Doacoes() {
  return (
  <DoacaoContainer>
     <LinkButton>
        <Link to="/home">
          Voltar
        </Link>
      </LinkButton>
  <div>
  <h2>
      Sua doação irá ajudar os idosos em situação de vulnerabilidade social
      e as instituições atendidas.
    </h2>
  </div>
    <Lista>
  <ul className="doacao-lista">
    <li>Alimentos não perecíveis</li>
    <li>Cadeira de rodas</li>
    <li>Colchão</li>
    <li>Equipamento de proteção individual (EPI)</li>
    <li>Material de higiene</li>
    <li>Material de escritório</li>
    <li>Mobiliário</li>
    <li>Roupas</li>
    <li>Produtos de limpeza</li>
    <li>Fraldas geriátricas</li>
    <li>Medicamentos</li>
    <li>Óculos de grau (pedir receita)</li>
    <li>Brinquedos</li>
    <li>Utensílios de cozinha</li>
    <li>Cobertores</li>
    <li>Calçados</li>
    <li>Jogos de tabuleiro</li>
    <li>Instrumentos musicais</li>
    <li>Material escolar</li>
    <li>Computadores ou tablets</li>
    </ul>  
</Lista>
<h2>
    Se a sua empresa deseja realizar uma campanha interna para arrecadar doações
    de produtos, entre em contato pelo e-mail:
    netosporescolhasalvador@gmail.com
  </h2>
</DoacaoContainer>

  );
}

export default Doacoes;
