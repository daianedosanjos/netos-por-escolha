import { Lista } from "../styles/Doacoes.styles";

function Doacoes() {
  return (
    <Lista>
      <div className="doacao-title">
        <h3>
          Sua doação irá ajudar os idosos em situação de vulnerabilidade social
          e as instituições atendidas.
        </h3>
      </div>
      <ul className="doacao-lista">
        <li>Alimentos não perecíveis</li>
        <li>Cadeira de rodas</li>
        <li>Colchão</li>
        <li>Equipamento de proteção individual (EPI)</li>
        <li>Material de higiene</li>
        <li>Material de escritório</li>
        <li>Mobiliário</li>
        <li>Roupas</li>
      </ul>
      <h4>
        Se a empresa deseja realizar uma campanha interna para arrecadar doações
        de produtos, entre em contato pelo e-mail:
        netosporescolhasalvador@gmail.com
      </h4>
    </Lista>
  );
}

export default Doacoes;
