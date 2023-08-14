import anarosa from "../../img/anarosa.jpg";
import { CardQuemSomos, ContainerQuemSomos } from "../styles/QuemSomos.styles";

function QuemSomos() {
  return (
    <ContainerQuemSomos>
      <div>
        <img src={anarosa} alt="" />
      </div>
      <div>
        <CardQuemSomos>
          <h3>Como tudo começou</h3>
          <p>
            "Em 2015, fui convidada pela equipe da Fátima Bernardes para
            compartilhar um pouco da minha história com meu avô Fernando, que
            sofria de Alzheimer. Eu administrava uma página chamada 'Prazer, Sua
            Neta', onde compartilhava detalhes da nossa rotina juntos. Meses
            depois, a convite da prefeitura, reuni-me com projetos sociais e
            influenciadores das redes sociais para discutir solidariedade e o
            terceiro setor. Fui provocada com a pergunta: 'Por que você não cria
            um projeto social para idosos?'. Foi assim que, em 2016, nasceu o
            'Netos por Escolha'. O nome reflete a nossa decisão consciente de
            amar e cuidar dos nossos avôs e avós de coração. Começamos de
            maneira modesta e hoje já estamos presentes em várias cidades, como
            Juazeiro, Conselheiro Lafaiete e São Paulo. Através do 'Netos por
            Escolha', tivemos o privilégio de amar e cuidar de mais de 1000
            idosos. O projeto evoluiu e agora somos uma grande família com mais
            de 200 voluntários comprometidos com essa causa."
          </p>
        </CardQuemSomos>

        <CardQuemSomos>
          <h3>Como atuamos</h3>
          <p>
            "Em cada ação que realizamos, seja ela frequente ou pontual, seja
            através de atividades lúdicas ou com as doações arrecadadas, sempre
            colocamos nossos valores como base. Dessa forma, garantimos que
            todos sejam respeitados, amados e ouvidos. Promovemos atividades a
            cada 15 dias, sempre aos domingos, em instituições diferentes.
            Nossas ações incluem fornecer o lanche da manhã, música, bingo com
            brindes, serviços de manicure e pedicure, além de proporcionar um
            espaço para ouvir e compartilhar histórias. Além disso, também
            realizamos ações especiais em datas como Carnaval, São João, Dia dos
            Avós e eventos de Natal."
          </p>
        </CardQuemSomos>
      </div>
     </ContainerQuemSomos>
  );
}

export default QuemSomos;
